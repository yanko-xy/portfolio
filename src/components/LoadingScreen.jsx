import { useProgress } from "@react-three/drei"
import { useEffect } from "react"

export const LoadingScreen = (props) => {
    const { started, setStarted } = props
    const { progress, total, loaded, item } = useProgress()

    useEffect(() => {
        if (progress === 100) {
            setTimeout(() => {
                setStarted(true)
            }, 500)
        }
    }, [progress, total, loaded, item])
    return <div></div>
}
