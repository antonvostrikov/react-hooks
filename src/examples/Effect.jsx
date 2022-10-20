const [type, setType] = useState('users')
  const [data, setData] = useState([])
  const [pos, setPos] = useState({
    x: 0, y: 0
  })

  // useEffect(() => {
  //   console.log('render');
  // })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))
  }, [type])

  const mouseMoveHandler = e => {
    setPos({
      x: e.clientX,
      y: e.clientY
    })
  }

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      window.removeEventListener(mouseMoveHandler)
    }
  }, [])