import re
import os

path = 'src/app/habit/habit-details/habit-details.scss'
with open(path, 'r') as f:
    content = f.read()

# Pattern for class blocks: .class-name { ... }
# This is a bit naive for nested SCSS but these files are flat.
blocks = re.findall(r'(\.[a-zA-Z0-9_-]+\s*{[^{}]*})', content)

# deduplicate while preserving order of first appearance
seen_classes = set()
clean_blocks = []

for block in blocks:
    class_match = re.search(r'(\.[a-zA-Z0-9_-]+)', block)
    if class_match:
        cls = class_match.group(1)
        # Check if block has broken {{ }} interpolation
        if '{{' in block or '}}' in block or 'habit()?' in block:
            # Clean it up inside the block
            block = re.sub(r'[^;]*\{\{[^}]*\}\}[^;]*;', '', block)
            # Remove any residual 60; or broken bits
            block = re.sub(r'[^;]*habit\(\)\?[^;]*;', '', block)
            block = re.sub(r'\s*\d+;\s*', '', block)
        
        if cls not in seen_classes:
            seen_classes.add(cls)
            clean_blocks.append(block)

with open(path, 'w') as f:
    f.write('\n\n'.join(clean_blocks) + '\n')

print(f"Deduplicated to {len(clean_blocks)} classes.")
