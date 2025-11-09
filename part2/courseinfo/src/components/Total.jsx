const Total = ({ parts }) => {
  console.log(parts)
  const sum = parts.reduce((total, part) => total + part.exercises, 0)
  console.log(sum)
  return (
    <p>
      <b>Total of {sum} exercises</b>
    </p>
  )
}

export default Total
