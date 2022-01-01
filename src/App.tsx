import './styles.css'

export const App = () => {
  return (
    <>
      <h1>
        {process.env.name} Welcomes you to your{' '}
        <div className="crimson">React Webpack Template</div> -{' '}
        {process.env.NODE_ENV} Version
      </h1>
      <p>Shall we begin your project?</p>
    </>
  )
}
