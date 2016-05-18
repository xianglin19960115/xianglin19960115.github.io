var student = {
	name: "def",
	age: 18,
	major: "广告学",
	sayhello: function() {
		console.log("你好");
	}
}

console.log(student.name);
console.log(student.major);
console.log(student.age);
student.sayhello();
for (var i in student) {
	console.log(i + "=" + student[i]);
}