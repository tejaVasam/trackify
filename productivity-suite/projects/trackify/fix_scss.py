path = 'src/app/habit/habit-details/habit-details.scss'
with open(path, 'r') as f:
    lines = f.readlines()

# The file is exactly duplicated at line 271
# Let's take just the first 270 lines
# But actually let's just make sure we only take unique classes.
# But keeping first 270 lines is safest if it's literally duplicated:
if len(lines) > 500:
    lines = lines[:len(lines)//2]

# Remove the broken lines from lines map
fixed_lines = []
skip = False
for line in lines:
    if "background: radial-gradient(circle," in line and "{{" in line:
        skip = True
        continue
    if "box-shadow: 0 8px 16px -4px {" in line:
        skip = True
        continue
    if skip:
        if "}" in line and "}}" not in line and "60;" not in line:
            # wait, the block ends with 60;
            pass
        if "60;" in line or "border-radius: 50%;" in line or "0%, transparent 60%);" in line or "habit()?.color" in line or "{{" in line or "}}" in line:
            if "border-radius: 50%;" in line:
                fixed_lines.append("  border-radius: 50%;\n")
            continue
        else:
            skip = False
            
    fixed_lines.append(line)

with open(path, 'w') as f:
    f.writelines(fixed_lines)
