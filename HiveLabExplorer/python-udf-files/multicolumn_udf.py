import sys
for line in sys.stdin:
    line = line.strip('\n\r')
    producttype, quantity, unitprice = line.split('\t')
    if 'bike' in producttype.lower():
        producttype='bike'
    elif 'car' in producttype.lower():
        producttype = 'car'
    elif 'truck' in producttype.lower():
        producttype = 'heavy vehicle'

    totalsale = float(quantity)*float(unitprice)    
    result = '\t'.join([producttype,str(totalsale)])
    print(result)
