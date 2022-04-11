
export default function Component({ styles, language }) {
  return (
    <section className={styles['graphics-section']}>
      <div className={styles.title}>Over 146 million trees planted</div>
      <div className={styles.column}>
        {getTimePeriods().map((period, index) => (
          <div key={`period_${index}`} className={styles.column__item}>
            <div className={styles.time}>{period.time}</div>
            <div className={styles.subtitle}>{period.title}</div>
            <hr className={styles.line} />
            <div className={styles.time}>{period.content}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function getTimePeriods() {
  return [
    {
      time: 'December 2009',
      title: '1.1 sec',
      content: 'to plant a tree'
    },
    {
      time: 'over',
      title: '15 million',
      content: 'active users'
    },
    {
      time: 'now',
      title: <div>{146000000}</div>,
      content: 'trees total'
    },
    {
      time: 'over',
      title: '12,101,152',
      content: 'EUR invested'
    },
    {
      time: 'over',
      title: '9000',
      content: 'planting sites'
    },
  ]
}
