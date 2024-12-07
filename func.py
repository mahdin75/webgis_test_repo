def distance(p1,p2):
    dx = p1[0] - p2[0]
    dy = p1[1] - p2[1]
    dz = p1[2] - p2[2]

    d = (dx**2 + dy**2 + dz**2)**(0.5)

    return d


d1 = distance([0, 0, 0], [10, 10, 10])
d2 = distance([5, 0, 0], [10, 4, 10])
d3 = distance([0, 0, 7], [6, 10, 10])
d4 = distance([0, 88, 0], [0, 5, 2])
d5 = distance([0, 78, 0], [10, 10, 10])
d6 = distance([7, 0, 0], [4, 10, 10])

print(d1)
print(d2)
print(d3)
print(d4)
print(d5)
print(d6)

