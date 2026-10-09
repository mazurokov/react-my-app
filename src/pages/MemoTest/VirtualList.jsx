import {useEffect, useMemo, useRef} from "react";
import {useVirtualizer} from "@tanstack/react-virtual";

function VirtualList() {
  const parentRef = useRef(null);

  const items = useMemo(
    () => Array.from({
      length: 10_000
    }, (_, index) => `Item ${index + 1}`),
    [],
  );

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
    overscan: 25,
    getItemKey: index => items[index],
  });

  const virtualItems = virtualizer.getVirtualItems();

  useEffect(() => {
    if (!virtualItems.length) return;

    console.table(
      virtualItems.slice(0, 5).map((item) => ({
        index: item.index,
        start: item.start,
        size: item.size,
        end: item.end,
      })),
    );
  }, [virtualItems]);

  return (
    <div
      ref={parentRef}
      style={{
        height: "400px",
        overflow: "auto",
        border: "1px solid #ccc",
        position: "relative",
      }}
    >
      <div
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          width: "100%",
          position: "relative",
        }}
      >
        {virtualItems.map((virtualItem) => {
          const item = items[virtualItem.index];

          if (!item) return null;

          return (
            <div
              key={virtualItem.key}
              data-index={virtualItem.index}
              ref={virtualizer.measureElement}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                transform: `translateY(${virtualItem.start}px)`,
                padding: "12px",
                boxSizing: "border-box",
              }}
            >
              <div>
                {item}
                <p>
                  {virtualItem.index % 3 === 0
                    ? "This is a longer description that occupies more space.This is a longer description that occupies more space.This is a longer description that occupies more space.This is a longer description that occupies more space.This is a longer description that occupies more space.This is a longer description that occupies more space.This is a longer description that occupies more space.This is a longer description that occupies more space.This is a longer description that occupies more space."
                    : "Short description."}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default VirtualList;