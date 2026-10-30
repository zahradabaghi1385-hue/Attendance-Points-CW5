export function attendancePoints(days) {
    if ((typeof days !== "number") || (days < 0 || days > 30)) {
        return null
    } else if (days === 0) {
        return 0
    } else {
        let total = 0
        for (let i = 1; i <= days; i++) {
            total = total + 20 + (5 * i);
        }
        return total
    }
}

console.log(attendancePoints(0))
console.log(attendancePoints(1))
console.log(attendancePoints(3))
console.log(attendancePoints(30))
console.log(attendancePoints(31))
console.log(attendancePoints("3"))
