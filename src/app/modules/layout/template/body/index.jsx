import {SocialMedia} from '../socials'
import {socials} from '@/utils/experiences'

export const Body = ({children})=>{
    // useEffect(()=>{
    //     let bdy = document.querySelector(".enclose")
    //     bdy.addEventListener('mousemove', (e)=>{
    //         let rect = bdy.getBoundingClientRect()
    //         let x = e.clientX - rect.left;
    //         let y = e.clientY - rect.top;
    //         bdy.style.setProperty('--x', x + 'px');
    //         bdy.style.setProperty('--y', y + 'px');
    //         console.log(x)
    //     })
    // }, [])

    return (
        <div className="grid lg:grid-cols-2 container mx-auto px-8 lg:px-12 xl:px-20 mt-24 gap-8 lg:gap-0">
          <div className="lg:sticky lg:top-24 lg:left-0 intro lg:pb-4 backdrop-blur-sm">
            <div className="h-full flex flex-col justify-between">
              <header className="space-y-3">
                <h1 className="text-5xl font-bold">Daodu Muyiwa</h1>
                <p className="text-2xl font-medium">Frontend Developer</p>
                <p className="text-lg text-[#cdcccc] md:w-[40ch]">Experienced frontend developer invested in developing beautiful and scalable web applications with well written and readable code</p>
              </header>

              <div className="mt-4 md:mt-8 lg:mt-0">
                <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-1 gap-4 mg:gap-0 lg:gap-4">
                  {socials.map(social=>{
                    return SocialMedia(social)
                  })}
                </ul>
              </div>
            </div>
          </div>
          {children}
        </div>
    )
}