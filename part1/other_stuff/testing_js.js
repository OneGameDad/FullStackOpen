const x = 1
let y = 5

console.log(x, y)
y += 10
console.log(x, y)
y = 'sometext'
console.log(x, y)

const t = [1, -1, 3]

t.push(5)

console.log(t.length)
console.log(t[1])

t.forEach(value => {
	console.log(value)
})

const t2 = t.concat(7)
console.log(t)
console.log(t2)

const u = [1, 2, 3]

const m1 = u.map(value => value * 3)
console.log(m1)

const m2 = u.map(value => '<li>' + value + '</li>')
console.log(m2)

const v = [1, 2, 3, 4, 5]
const [first, second, ...rest] = v
console.log(first, second)
console.log(rest)

const objectA = {
	name: 'Bob',
	age: 23,
	class: 'Barbarian',
}

const objectB = {
	name: 'Ana',
	level: 57,
	focus: 'Warlock Capture & Condemnation',
}

const objectC = {
	name: 'Noki',
	sizes: [117, 123, 541],
	saying: 'Something',
}

console.log(objectA.name)
const fieldName = 'age'
console.log(objectA[fieldName])

objectA.address = 'Åbo'
objectB['secret'] = 'Allergic to chocolate'

const sum = (p1, p2) => {
	console.log(p1)
	console.log(p2)
	return p1 + p2
}

const result = sum(1, 5)
console.log(result)

const square = p => p * p

const newResult = square(7)
console.log(newResult)

const w = [2, 4, 6]
const wSquare = w.map(p => p * p)


function product(a, b) {
	return a * b
}

const result2 = product(2, 6)

const average = function(a, b) {
	return (a + b) / 2
}
const result3 = average(2, 5)

