import Button from "./Button.jsx";

export default function Hero() {
    return (
        <div className={'min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full mx-auto p-4'}>
            <div className={'flex flex-col gap-4'}>
                <p>IT&#39;S TIME TO VISIT</p>
                <h1 className={'uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'}>
                    gym<span className={'text-blue-400 font-medium'}>topia</span>
                </h1>
                <p className={'text-sm md:text-base font-light'}>&#34;I hereby acknowledgement that I may become <span
                    className={'text-blue-400 font-medium'}>unbelievably swolenormous</span> and accept all risks of
                    becoming the local <span className={'text-blue-400 font-medium'}>mass monstrosity</span>, afflicted
                    with severe body dismorphia, unable to fit
                    through doors.&#34;</p>
            </div>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"} />
        </div>
    )
}
