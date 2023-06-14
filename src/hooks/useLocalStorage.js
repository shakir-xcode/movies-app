import { useState, useEffect } from 'react';

const getFromLocalStorage = (key, initialValue) => {
	const savedData = JSON.parse(localStorage.getItem(key))

	if (savedData) return savedData

	if (initialValue instanceof Function) return initialValue()

	return initialValue
}

export default function useLocalStorage(key, initialValue) {
	const [value, setValue] = useState(() => getFromLocalStorage(key, initialValue));

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value))
	}, [value])

	return [value, setValue];

}





