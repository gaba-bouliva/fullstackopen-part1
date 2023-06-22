
const StatisticLine = ({text, value}) => {

  return  (
    <>
      <td><strong>{text} </strong></td>
      <td><strong>{value} {text === 'positive'? '%' : ''}</strong></td>
    </>
  )
          

}

export default StatisticLine