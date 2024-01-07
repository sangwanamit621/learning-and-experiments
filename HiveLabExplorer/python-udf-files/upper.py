import sys
for line in sys.stdin:
    line = line.strip('\n\r')
    result = line.upper()
    print(result)
