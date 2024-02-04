huruf = []
banyakHuruf = int(input('Masukkan berapa banyak huruf : '))
for i in range(banyakHuruf):
    inp = input(f'masukkan huruf ke-{i+1} : ')
    huruf.append(inp)
cariHuruf = input('masukkan huruf yang akan dicari : ')
muncul = 0
for i in range(len(huruf)):
    if cariHuruf == huruf[i]:
        muncul += 1
        print(f'huruf {huruf[i]} yang anda cari ada dan terdapat di index ke-{i}')
    print(f'dan muncul sebanyak {muncul} kali')
if cariHuruf not in huruf:
    print('huruf yang anda cari tidak ada')