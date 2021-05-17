const fetchBasic = async (url) =>{
   return (await fetch(`https://api.themoviedb.org/3${url}`))
}


export const getData = async (key) =>{

    switch (key) {
        case key == 'tv':
            const {data} =await fetchBasic('/discover/tv/?with_network=213&language=pt-BR&api_key=80a40e211404d8a3420f6cd3e67455af')
            return data
        case key == 'alau':
            return await fetchBasic('/discover/tv/?with_network=213&language=pt-BR&api_key=80a40e211404d8a3420f6cd3e67455af')
        default:
            break;
    }

}