def isDigit(a1):
    try:
        float(a1)
        return True
    except ValueError:
        return False

def isInt(a1):
    try:
        int(a1)
        return True
    except ValueError:
        return False

def pos_num_check(a1):
    if isDigit(a1)==False or float(a1)<=0 :
        print("Re-enter again")
        a1=input("Please re-enter:")
        return pos_num_check(a1)
    else:
        return a1

def pos_int_check(a1):
    if isInt(a1)==False or int(a1)<=0 :
        print("Re-enter again")
        a1=input("Please re-enter:")
        return pos_int_check(a1)
    else:
        return int(a1)

def num_check(a1):
    if isDigit(a1)==False :
        print("Re-enter again")
        a1=input("Please re-enter:")
        return num_check(a1)
    else:
        return a1

def int_check(a1):
    if isInt(a1)==False :
        print("Re-enter again")
        a1=input("Please re-enter:")
        return int_check(a1)
    else:
        return a1

def mid_int_check(up, bot, a1):
    if a1<=up and a1>=bot :
        return a1
    else:
        print("Re-enter again")
        a1=input("Please re-enter:")
        a1=pos_int_check(a1)
        a1=int(a1)
        return mid_int_check(up, bot, a1)

def num_swap(a1,a2):
    if a2>=a1 :
        temp_num=a1
        a1=a2
        a2=temp_num
        return a1,a2
    else:
        return a1,a2

def odd_even(a1):
    if a1%2 == 0 :
        return True
    else:
        return False

def getNum():
    temp_num=input("plz enter data:")
    temp_num=num_check(temp_num)
    conti=input("to enter next data plz press Enter")
    if conti=="":
        return float(temp_num), getNum()
    else:
        return float(temp_num)

def getStr():
    temp_str=input("plz enter data:")
    conti=input("to enter next data plz press Enter")
    if conti=="":
        return temp_str, getStr()
    else:
        return temp_str

def flatten_list(k):
    result = list()
    for i in k:
        if isinstance(i,tuple):

            #The isinstance() function checks if the object (first argument) is an 
            #instance or subclass of classinfo class (second argument)

            result.extend(flatten_list(i)) #Recursive call
        else:
            result.append(i)
    return result
#Thank you Stackoverflow!

def get_Strlist():
    mylist=[]
    mylist.append(getStr())
    mylist=flatten_list(mylist)
    return mylist

def get_Numlist():
    mylist=[]
    mylist.append(getNum())
    mylist=flatten_list(mylist)
    return mylist

def get_sort_Numlist():
    mylist=get_Numlist()
    list_sorted=[]
    while len(mylist)!=0 :
        list_sorted.append(max(mylist))
        mylist.remove(max(mylist))
    return list_sorted
    
def rus_rom(rstr):
    #lower_Capital
    str1=rstr.replace("а","a")
    str2=str1.replace("б","b")
    str3=str2.replace("в","v")
    str4=str3.replace("г","g")
    str5=str4.replace("д","d")
    str6=str5.replace("е","e")
    str7=str6.replace("ж","j")
    str8=str7.replace("з","z")
    str9=str8.replace("и","i")
    str10=str9.replace("й","i")
    str11=str10.replace("к","k")
    str12=str11.replace("л","l")
    str13=str12.replace("м","m")
    str14=str13.replace("н","n")
    str15=str14.replace("о","o")
    str16=str15.replace("п","p")
    str17=str16.replace("р","r")
    str18=str17.replace("с","s")
    str19=str18.replace("т","t")
    str20=str19.replace("у","u")
    str21=str20.replace("ф","f")
    str22=str21.replace("х","h")
    str23=str22.replace("ц","tz")
    str24=str23.replace("ш","sh")
    str25=str24.replace("щ","sh")
    str26=str25.replace("ь","\'")
    str27=str26.replace("ю","yu")
    str28=str27.replace("я","ya")
    str29=str28.replace("ё","yo")
    str30=str29.replace("ы","y")
    str31=str30.replace("ъ","\'")
    str32=str31.replace("э","e")
    str33=str32.replace("ч","ch")
    #Capital
    str34=str33.replace("А","A")
    str35=str34.replace("Б","B")
    str36=str35.replace("В","V")
    str37=str36.replace("Г","G")
    str38=str37.replace("Д","D")
    str39=str38.replace("Е","E")
    str40=str39.replace("Ж","J")
    str41=str40.replace("З","Z")
    str42=str41.replace("И","I")
    str43=str42.replace("Й","I")
    str44=str43.replace("К","K")
    str45=str44.replace("Л","L")
    str46=str45.replace("М","M")
    str47=str46.replace("Н","N")
    str48=str47.replace("О","O")
    str49=str48.replace("П","P")
    str50=str49.replace("Р","R")
    str51=str50.replace("С","S")
    str52=str51.replace("Т","T")
    str53=str52.replace("У","U")
    str54=str53.replace("Ф","F")
    str55=str54.replace("Х","H")
    str56=str55.replace("Ц","Tz")
    str57=str56.replace("Ш","Sh")
    str58=str57.replace("Щ","Sh")
    str59=str58.replace("Ь","\'")
    str60=str59.replace("Ю","Yu")
    str61=str60.replace("Я","Ya")
    str62=str61.replace("Ё","Yo")
    str63=str62.replace("Ы","Y")
    str64=str63.replace("Ъ","\'")
    str65=str64.replace("Э","E")
    rostr=str65.replace("Ч","Ch")
    return rostr
