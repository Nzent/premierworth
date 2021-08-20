import { useRouter } from "next/router";
import useDataFetch from "../fetch";

export default function Footer() {
    const { data, isLoading, isError } = useDataFetch('items/pagedata?fields=website_name')
    var name = data.data[0].website_name
    if (isLoading) return (<div>Loading ... </div>)
    if (isError) return (name = 'Web Name')



    const router = useRouter()
    return (
        <>
            {router.pathname === '/' ? <></>

                :
                <>
                    <div className='h-full'>
                        <div className='bg-white shadow-md p-2 text-center flex justify-center items-center w-full fixed rounded-t-md bottom-0'>©{name}</div>
                    </div>
                </>
            }
        </>
    )
};
