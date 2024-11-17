import Image from "next/image"
export default function Hero() {
    return (
        <div className="w-[1920px] h-[829px] px-[220px] bg-[#043873] flex justify-center items-center">
            <div className="w-[656px] h-[361px] border border-black">
                <div className="w-[656px] h-[238px] gap-[24px] border-black border">
                    <h2 className="w-[656px] h-[154px] text-white font-inter font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] border border-black">Get More Done with whitepace</h2>
                </div>
                <div className="w-[219px] h-[63px] rounded-lg p-[20px] border border-black bg-[#4F9CF9]">
                    <p className="w-[656px] h-[60px] font-inter font-normal text-lg leading-[30px] tracking-[-0.02em]">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                </div>
            </div>
            <div></div>
        </div>
    )
}