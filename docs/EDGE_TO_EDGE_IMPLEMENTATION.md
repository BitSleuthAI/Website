# Edge-to-Edge Viewport Implementation

This document describes the implementation of edge-to-edge viewport layout for the BitSleuth website, providing a modern, immersive "native app" experience on supported devices.

## Overview

The edge-to-edge implementation ensures that the web application extends to the absolute edges of the display on supported devices (iOS 26+, modern Android devices), utilizing the screen area typically occupied by system status bars and navigation indicators while ensuring critical UI elements are not obscured by display cutouts (notches) or system gestures (home bars).

## Implementation Details

### 1. Viewport Meta Tag

**Location:** `src/app/layout.tsx` (line 49)

```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no, minimal-ui" />
```

The `viewport-fit=cover` directive is the foundation of edge-to-edge layout, instructing browsers to expand the viewport to cover the entire display area.

### 2. CSS Safe Area Insets

**Location:** `src/app/globals.css`

#### Environment Variables Used

CSS environment variables provide safe area insets for each edge:

- `env(safe-area-inset-top)` - Status bar area (notch area on iOS)
- `env(safe-area-inset-bottom)` - Home indicator area
- `env(safe-area-inset-left)` - Left screen edge (landscape orientation)
- `env(safe-area-inset-right)` - Right screen edge (landscape orientation)

#### Utility Classes

New utility classes for applying safe areas to any element:

```css
.safe-area-top { padding-top: env(safe-area-inset-top); }
.safe-area-bottom { padding-bottom: env(safe-area-inset-bottom); }
.safe-area-left { padding-left: env(safe-area-inset-left); }
.safe-area-right { padding-right: env(safe-area-inset-right); }
.safe-area-x { padding-left/right: env(safe-area-inset-left/right); }
.safe-area-y { padding-top/bottom: env(safe-area-inset-top/bottom); }
.safe-area-all { padding: all env(safe-area-inset-*); }
```

#### Edge-to-Edge Sections

```css
.edge-to-edge-section {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  padding-left: max(1rem, env(safe-area-inset-left));
  padding-right: max(1rem, env(safe-area-inset-right));
}
```

This class creates full-width sections while respecting safe areas.

#### Container Safe Areas

```css
.container {
  padding-left: max(1rem, env(safe-area-inset-left));
  padding-right: max(1rem, env(safe-area-inset-right));
}
```

### 3. Component-Level Implementation

#### Header Component

**Location:** `src/components/landing/Header.tsx`

The sticky header respects all safe area insets:

```tsx
<header style={{ 
  paddingTop: 'calc(1rem + env(safe-area-inset-top))',
  paddingBottom: '1rem',
  paddingLeft: 'max(1rem, env(safe-area-inset-left))',
  paddingRight: 'max(1rem, env(safe-area-inset-right))',
  minHeight: 'calc(4rem + env(safe-area-inset-top))',
  height: 'calc(4rem + env(safe-area-inset-top))'
}}>
```

**Key Features:**
- Extends behind status bar on iOS
- Fixed height to prevent layout shifts
- Respects notch and home indicator areas

#### Footer Component

**Location:** `src/components/landing/Footer.tsx`

The footer ensures content isn't hidden by home indicators:

```tsx
<footer style={{ 
  paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))',
  paddingLeft: 'max(1rem, env(safe-area-inset-left))',
  paddingRight: 'max(1rem, env(safe-area-inset-right))'
}}>
```

#### Toast Notifications

**Location:** `src/components/ui/toast.tsx`

Toast notifications respect all safe areas:

```tsx
<ToastViewport
  style={{
    paddingTop: 'max(1rem, env(safe-area-inset-top))',
    paddingBottom: 'max(1rem, env(safe-area-inset-bottom))',
    paddingLeft: 'max(1rem, env(safe-area-inset-left))',
    paddingRight: 'max(1rem, env(safe-area-inset-right))'
  }}
/>
```

#### Sheet (Mobile Menu)

**Location:** `src/components/ui/sheet.tsx`

The mobile menu dynamically adjusts padding based on which edge it appears from:

```tsx
const getSafeAreaStyle = () => {
  switch (side) {
    case "top":
      return {
        paddingTop: 'max(1.5rem, env(safe-area-inset-top))',
        paddingLeft: 'max(1.5rem, env(safe-area-inset-left))',
        paddingRight: 'max(1.5rem, env(safe-area-inset-right))'
      };
    case "bottom":
      return {
        paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))',
        // ... etc
      };
    // ... other cases
  }
};
```

The close button position also adjusts:

```tsx
<SheetPrimitive.Close 
  style={{
    right: side === "right" ? 'max(1rem, env(safe-area-inset-right))' : '1rem',
    top: 'max(1rem, env(safe-area-inset-top))'
  }}
/>
```

#### Cookie Consent Banner

**Location:** `src/app/globals.css`

```css
.cookie-banner-container {
  position: fixed;
  bottom: max(1rem, env(safe-area-inset-bottom));
  left: max(1rem, env(safe-area-inset-left));
  right: max(1rem, env(safe-area-inset-right));
}
```

## Browser Support

### Full Support
- **iOS Safari 11.2+** - Full safe area inset support
- **iOS Chrome/Edge 11.2+** - Full safe area inset support
- **Android Chrome 69+** - Safe area support on devices with notches/cutouts
- **Safari 11.1+** - macOS and iOS

### Graceful Degradation
On browsers that don't support `viewport-fit=cover` or `env()`:
- The `max()` function ensures minimum padding (e.g., `1rem`)
- The viewport remains standard (not edge-to-edge)
- No negative impact on user experience

## Testing

### Visual Testing
Screenshots have been captured for:
1. **Desktop view** - Verifying normal layout not affected
2. **Mobile view** - Confirming edge-to-edge extends properly
3. **Mobile menu** - Ensuring safe area insets work on overlay

### Device Testing Recommendations

Test on the following device configurations:

1. **iPhone with Notch** (iPhone X and newer)
   - Portrait orientation
   - Landscape orientation
   - Status bar visible/hidden

2. **iPhone with Dynamic Island** (iPhone 14 Pro and newer)
   - Portrait orientation
   - Landscape orientation

3. **Android with Notch/Cutout**
   - Various manufacturers (Samsung, Google Pixel, OnePlus)
   - Gesture navigation enabled
   - Button navigation enabled

4. **iPad** (Pro models with rounded corners)
   - Portrait orientation
   - Landscape orientation
   - Split-view multitasking

### Manual Testing Checklist

- [ ] Header doesn't disappear behind status bar
- [ ] Footer content not hidden by home indicator
- [ ] Cookie consent banner visible and accessible
- [ ] Mobile menu opens/closes without cutoff
- [ ] Toast notifications appear in safe area
- [ ] All CTAs are tappable (not in gesture zones)
- [ ] Content readable in landscape orientation
- [ ] Dark mode maintains proper safe areas

## Best Practices

### When to Use Safe Area Insets

1. **Fixed/Sticky Elements** - Headers, footers, floating buttons
2. **Full-Screen Overlays** - Modals, sheets, dialogs
3. **Edge-to-Edge Sections** - Hero sections, full-width content
4. **Critical CTAs** - Buttons that must be accessible

### Pattern: max() Function

Always use `max()` to ensure minimum padding:

```css
padding-left: max(1rem, env(safe-area-inset-left));
```

This ensures:
- ✅ Safe area respected on supported devices
- ✅ Minimum padding on unsupported devices
- ✅ Graceful degradation

### Pattern: calc() for Additive Spacing

When adding to safe areas:

```css
padding-top: calc(1rem + env(safe-area-inset-top));
```

Use when you need base padding **plus** safe area.

## Future Enhancements

Potential improvements for future iterations:

1. **Viewport Units with Safe Areas**
   - Use `dvh` (dynamic viewport height) for full-height sections
   - Combine with safe area insets for true edge-to-edge

2. **Orientation-Specific Styles**
   - Different layouts for landscape with safe areas
   - Optimize for notch position in landscape

3. **Progressive Enhancement**
   - Detect safe area support via JavaScript
   - Apply enhanced styles only when supported

4. **Performance Optimization**
   - CSS custom properties for safe area values
   - Reduce style recalculations

## References

- [MDN: viewport-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/@viewport/viewport-fit)
- [MDN: env()](https://developer.mozilla.org/en-US/docs/Web/CSS/env)
- [WebKit: Designing Websites for iPhone X](https://webkit.org/blog/7929/designing-websites-for-iphone-x/)
- [Can I Use: env()](https://caniuse.com/css-env-function)

## Troubleshooting

### Issue: Content Still Hidden Behind Notch

**Solution:** Ensure `viewport-fit=cover` is in viewport meta tag and safe area insets are applied to the affected component.

### Issue: Safe Areas Not Working on Android

**Solution:** Verify Android WebView version is 69+. Check if device manufacturer has disabled feature.

### Issue: Layout Shifts on Orientation Change

**Solution:** Use fixed heights with safe area calculations. Add CSS transitions for smooth changes.

### Issue: Dark Mode Border at Safe Areas

**Solution:** Ensure root `html` and `body` have `background-color` set to match theme:

```css
html {
  background: hsl(var(--background));
}
```

## Changelog

### 2025-11-11 - Initial Implementation
- Added `viewport-fit=cover` to viewport meta tag
- Implemented safe area insets in Header component
- Implemented safe area insets in Footer component
- Added safe area support to Toast component
- Added safe area support to Sheet component
- Updated cookie consent banner with safe areas
- Added CSS utility classes for safe areas
- Enhanced edge-to-edge sections with horizontal safe areas
- Created comprehensive documentation

---

**Maintained by:** BitSleuth Development Team  
**Last Updated:** November 11, 2025
