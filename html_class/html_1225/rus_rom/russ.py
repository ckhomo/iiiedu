from check import rus_rom

file = open("C:/classdata/html_class/html_1225/rus_rom/russ.txt", "r", encoding="utf-8")
if file.mode=="r":
    content=file.read()
    #print(content)
content=rus_rom(content)
print(content)

res_file=open("C:/classdata/html_class/html_1225/rus_rom/rom.txt", "w+", encoding="utf-8")
res_file.write(content)