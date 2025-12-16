// src/lib/rate-limit.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { checkRateLimit, RateLimitPresets } from './rate-limit';

describe('Rate Limiter', () => {
  beforeEach(() => {
    // Note: In a real scenario, you'd want to clear the in-memory store
    // For now, we use unique identifiers for each test
  });

  it('should allow first request', () => {
    const result = checkRateLimit('test-user-1', RateLimitPresets.STRICT);
    
    expect(result.success).toBe(true);
    expect(result.limit).toBe(5);
    expect(result.remaining).toBe(4);
  });

  it('should track remaining requests correctly', () => {
    const userId = 'test-user-2';
    
    // First request
    const result1 = checkRateLimit(userId, RateLimitPresets.STRICT);
    expect(result1.remaining).toBe(4);
    
    // Second request
    const result2 = checkRateLimit(userId, RateLimitPresets.STRICT);
    expect(result2.remaining).toBe(3);
    
    // Third request
    const result3 = checkRateLimit(userId, RateLimitPresets.STRICT);
    expect(result3.remaining).toBe(2);
  });

  it('should block requests after limit exceeded', () => {
    const userId = 'test-user-3';
    const config = RateLimitPresets.STRICT; // 5 requests per minute
    
    // Make 5 requests (should all succeed)
    for (let i = 0; i < 5; i++) {
      const result = checkRateLimit(userId, config);
      expect(result.success).toBe(true);
    }
    
    // 6th request should fail
    const blockedResult = checkRateLimit(userId, config);
    expect(blockedResult.success).toBe(false);
    expect(blockedResult.remaining).toBe(0);
  });

  it('should use different limits for different presets', () => {
    const userId = 'test-user-4';
    
    const strictResult = checkRateLimit(userId, RateLimitPresets.STRICT);
    expect(strictResult.limit).toBe(5);
    
    const moderateResult = checkRateLimit('test-user-5', RateLimitPresets.MODERATE);
    expect(moderateResult.limit).toBe(10);
    
    const lenientResult = checkRateLimit('test-user-6', RateLimitPresets.LENIENT);
    expect(lenientResult.limit).toBe(30);
  });

  it('should provide reset timestamp', () => {
    const userId = 'test-user-7';
    const result = checkRateLimit(userId, RateLimitPresets.STRICT);
    
    expect(result.reset).toBeGreaterThan(Date.now());
    expect(result.reset).toBeLessThanOrEqual(Date.now() + 60000); // Within 1 minute
  });

  it('should handle different identifiers independently', () => {
    const user1 = 'test-user-8';
    const user2 = 'test-user-9';
    
    // User 1 makes 5 requests
    for (let i = 0; i < 5; i++) {
      checkRateLimit(user1, RateLimitPresets.STRICT);
    }
    
    // User 1 should be blocked
    const user1Result = checkRateLimit(user1, RateLimitPresets.STRICT);
    expect(user1Result.success).toBe(false);
    
    // User 2 should still be able to make requests
    const user2Result = checkRateLimit(user2, RateLimitPresets.STRICT);
    expect(user2Result.success).toBe(true);
  });
});
