
export default function Component({ language, styles }) {
  return (
    <section className={styles['social-business-section']}>
      <div className={styles.title}>Ecosia is a social business founded in 2009 after a trip around the world</div>
      <div className={styles.column}>
        {getTimePeriods().map((period, index) => (
          <div key={`period_${index}`} className={styles.column__item}>
            <div className={styles.time}>{period.time}</div>
            <div className={styles.subtitle}>{period.title}</div>
            <hr className={styles.line} />
            <div>{period.content}</div>
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
      title: 'Ecosia is born',
      content: 'Christian founded Ecosia.org after a trip around the world helped him understand the problems of deforestation.'
    },
    {
      time: '2009 - 2011',
      title: 'People\'s choice',
      content: 'Ecosia won several awards for its clever concept and speedy growth in Europe and beyond.'
    },
    {
      time: 'April 2014',
      title: 'First German B Corp',
      content: 'Ecosia was the first German company to become a B Corporation thanks to its social business model.'
    },
    {
      time: 'April 2018',
      title: '25 million trees',
      content: 'A planting milestone! That same year, Ecosia also builds its own solar energy plant to power every search.'
    },
  ]
}
