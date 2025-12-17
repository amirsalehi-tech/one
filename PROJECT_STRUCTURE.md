# Project Structure - Tour Cards Section

## Current Project Structure

```
dot-one/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   └── Button.tsx
│   │   ├── DatePicker/
│   │   │   └── DatePickerButton.tsx
│   │   ├── flight-search/
│   │   │   ├── FlightSearchSection.tsx
│   │   │   ├── hero/
│   │   │   │   └── HeroImage.tsx
│   │   │   ├── SearchFormRow/
│   │   │   │   └── FlightSearchBar.tsx
│   │   │   └── trip-type/
│   │   │       ├── SegmentedToggle.tsx
│   │   │       ├── tabs/
│   │   │       │   ├── TravelTypeTabs.tsx
│   │   │       │   └── types.ts
│   │   │       └── types.ts
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   ├── Logo.tsx
│   │   │   └── Navbar.tsx
│   │   ├── icons/
│   │   │   ├── BankIcon.tsx
│   │   │   ├── BusIcon.tsx
│   │   │   ├── IconFlight.tsx
│   │   │   └── IconLogin.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── input.tsx
│   │       ├── popover.tsx
│   │       ├── select.tsx
│   │       ├── tabs.tsx
│   │       ├── Toggle-group.tsx
│   │       └── toggle.tsx
│   ├── pages/
│   │   └── Home.tsx
│   └── lib/
│       └── utils.ts
```

## Recommended Structure for Tour Cards Section

Based on the image you provided, here's the recommended folder structure:

```
src/
├── components/
│   ├── tour-cards/                          # NEW: Main tour cards section
│   │   ├── TourCardsSection.tsx            # Main container component
│   │   ├── TourCard.tsx                    # Individual card component
│   │   ├── TourCardImage.tsx               # Card image with overlay
│   │   ├── TourCardContent.tsx             # Card content overlay
│   │   ├── TourCardBadge.tsx               # Date badge component
│   │   └── types.ts                        # TypeScript types
│   │
│   ├── icons/                               # EXISTING: Add new icons here (optional)
│   │   ├── IconCalendar.tsx                # OPTIONAL: Custom calendar icon (or use lucide-react Calendar)
│   │   ├── IconArrowLeft.tsx               # OPTIONAL: Custom arrow (or use lucide-react ChevronRight for RTL)
│   │   ├── IconArrowRight.tsx              # OPTIONAL: Custom arrow (or use lucide-react ChevronLeft for RTL)
│   │   ├── BankIcon.tsx                    # EXISTING
│   │   ├── BusIcon.tsx                     # EXISTING
│   │   ├── IconFlight.tsx                  # EXISTING
│   │   └── IconLogin.tsx                   # EXISTING
│   │
│   └── ui/                                  # EXISTING: Reusable UI components
│       └── ... (existing components)
│
└── pages/
    └── Home.tsx                             # UPDATE: Add TourCardsSection here
```

## Component Breakdown

### 1. TourCardsSection.tsx

- Main container component
- Handles horizontal scrolling
- Contains "مشاهده بیشتر" (View More) header with arrow
- Renders multiple TourCard components

### 2. TourCard.tsx

- Individual tour card component
- Contains image, badge, overlay, and content
- Handles click events

### 3. TourCardImage.tsx (Optional)

- Image component with gradient overlay
- Handles image loading and fallback

### 4. TourCardContent.tsx (Optional)

- Content overlay component
- Contains title, price, description, and CTA button

### 5. TourCardBadge.tsx

- Date badge component
- Shows calendar icon + date range
- Positioned at top-right of image

### 6. types.ts

- TypeScript interfaces for:
  - TourCard data structure
  - TourCardsSection props

## Implementation Notes

1. **Icons**: Use `lucide-react` (already installed) - it has `Calendar`, `ChevronRight`, `ChevronLeft`, `ArrowRight`, etc.
   - For RTL: Use `ChevronRight` for "left" arrow and `ChevronLeft` for "right" arrow
   - Calendar icon: Use `Calendar` from lucide-react
2. **Horizontal Scroll**: Use CSS `overflow-x-auto` with `flex` layout
3. **RTL Support**: App already has RTL support via `DirectionProvider`
4. **Styling**: Follow existing Tailwind CSS patterns used in the project
5. **Images**: Store tour images in `/public/tours/` or use a CDN

## Next Steps

1. Create the `tour-cards` folder structure
2. Create icon components (or use lucide-react)
3. Build individual components starting with TourCard
4. Create the main TourCardsSection component
5. Add it to Home.tsx page
6. Add sample data/types
