import { useEffect } from "react"

const useTitle = title => {

	useEffect(() => {
		document.title = `${title} - JoyWithToy`;
	},[title])
}

export default useTitle;