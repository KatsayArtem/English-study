async function words(str:string) {
    const resolve = await fetch(str)
    const data = await resolve.json()
    const result = await data
    return result
}

export const data = words('https://raw.githubusercontent.com/iuzhakov/English-Russian-vocabulary/master/words.json')