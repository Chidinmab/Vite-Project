function HeroSection () {
    return (
     <section className="h-screen flex flex-column justify-center items-center">
    <div className="text-center space-y-7">
        <p className="lg:text-[#717171] text-red-500 text-capitalize text-[14px]">
            ALL-IN-ONE MARKETING SOFTWARE</p>

        <h1 className="text-[62px] font-bold leading-tight">
            Send emails, automate marketing,
        monetize content – in one place</h1>

        <p className="lg:text-black text-[18px] text-yellow-400">
            Grow your business and boost revenue with an easy, affordable platform
             that brings email,
          <br /> automation, online courses and paid newsletters together.
        </p>

        <button className="lg:bg-[#fbe30c] px-8 py-4 rounded-3xl font-bold w-fit">
            Start 30-day FREE trial </button>
        <p>Try us free | No credit card required | Cancel anytime</p>
    </div>
</section>
    );
};
export default HeroSection;