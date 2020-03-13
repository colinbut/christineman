import { useEffect } from 'react'
import { useLocation, withRouter } from 'react-router-dom'

const ScrollToTop = ({children}) => {
    const { pathName } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathName])

    return children
}

export default withRouter(ScrollToTop)