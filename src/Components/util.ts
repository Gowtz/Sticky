export const colors = [
    "bg-yellow-200",
    "bg-green-300",
    "bg-teal-200",
    "bg-emerald-200",
    "bg-cyan-200",
    "bg-indigo-200",
    "bg-rose-200",
]
export function randomColor(){
    return colors[Math.floor(Math.random()*colors.length)]
}
export function getDate() {
    const data = new Date()
    return new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(data);
  }