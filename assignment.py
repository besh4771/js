# # i = 1
# # while True:
# #     if i%3 == 0:
# #         break
# #     print(i)
 
# #     i + = 1
# x = 56.236
# print("%.2f"%x)
# class tester:
#     def __init__(self, id):
#         self.id = str(id)
#         id="224"
 
# temp = tester(12)
# print(temp.id)

temp = input("Input the  temperature! (e.g., 45F, 102C etc.) : ")
degree = int(temp[:-1])
t_convention = temp[-1]

if t_convention.upper() == "C":
  result = int(round((9 * degree) / 5 + 32))
  o_convention = "Fahrenheit"
elif t_convention.upper() == "F":
  result = int(round((degree - 32) * 5 / 9))
  o_convention = "Celsius"
else:
  print("Input proper convention.")
  quit()
print("The temperature in", o_convention, "is", result, "degrees.")
