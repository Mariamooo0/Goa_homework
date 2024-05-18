
from turtle import *

#we whant to paint a house

width(3)

#step 1:draw a square
speed(30)
color("pink")
forward(200)
left(90)
  
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

#end of square

#step 2:draw a door 

forward(70)
color("pink")
left(90)
forward(110) #haight of thr door 
right(90)
forward(50)
right(90)
forward(110)

#end of door 

penup()
goto(200,200)
pendown()

#step 3 draw a roof
begin_fill()
color("pink")
right(150)
forward(200)
left(120)
forward(200)
end_fill()
#end of roof

penup()
left(30)
forward(20)
left(90)
forward(20)
pendown()
color("pink")
begin_fill()
forward(50)
right(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
end_fill()



penup()
right(90)
forward(105)
pendown()
begin_fill()
forward(50)
right(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
end_fill()

penup()
right(90)
forward(150)
left(90)
forward(150)
pendown()
color("yellow")
begin_fill()
circle(40)
end_fill()

exitonclick()