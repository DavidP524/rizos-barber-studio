export default function Footer() {
    return (
        <footer id="footer" className="bg-black py-20 px-6 relative border-t border-white/5 mt-32 z-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <h3 className="font-serif text-3xl font-bold mb-6 text-gold tracking-wide">RIZOS BARBER STUDIO</h3>
                    <p className="text-foreground/70 mb-10 max-w-sm font-light leading-loose flex-1">
                        Elevating the standard of grooming. Precision cuts, expert shaving, and an unmatched luxury experience in Dodge City.
                    </p>
                    <div className="space-y-4 text-foreground/80 font-light">
                        <p className="flex items-start gap-4">
                            <span className="text-gold font-semibold uppercase text-xs tracking-widest mt-1">Location</span>
                            <a href="https://maps.app.goo.gl/9Zc9QyC8Jk4j1yU59" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                                2601 Central Ave STE 19<br /> Dodge City, KS 67801
                            </a>
                        </p>
                        <p className="flex items-center gap-4">
                            <span className="text-gold font-semibold uppercase text-xs tracking-widest">Phone</span>
                            <a href="tel:+16209926132" className="hover:text-gold transition-colors">
                                (620) 992-6132
                            </a>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:items-end md:text-right space-y-6">
                    <h4 className="font-serif text-2xl font-bold text-gold">Hours of Operation</h4>
                    <ul className="text-foreground/70 space-y-4 font-light">
                        <li className="grid grid-cols-10 md:grid-cols-[1fr_auto] gap-4"><span className="col-span-4 md:col-auto font-medium text-foreground">Monday - Friday</span> <span>9:00 AM - 7:00 PM</span></li>
                        <li className="grid grid-cols-10 md:grid-cols-[1fr_auto] gap-4"><span className="col-span-4 md:col-auto font-medium text-foreground">Saturday</span> <span>9:00 AM - 5:00 PM</span></li>
                        <li className="grid grid-cols-10 md:grid-cols-[1fr_auto] gap-4"><span className="col-span-4 md:col-auto font-medium text-gold">Sunday</span> <span className="text-gold">Appointments Only</span></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-center text-sm text-foreground/40 font-light">
                © {new Date().getFullYear()} Rizos Barber Studio. Built for Excellence.
            </div>

            {/* Sticky Mobile Button */}
            <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
                <a href="https://getsquire.com/booking/book/rizos-barber-studio-dodge-city" target="_blank" rel="noopener noreferrer" className="block w-full bg-gold hover:bg-gold-hover text-background text-center py-4 rounded-full font-bold shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all uppercase tracking-wide">
                    BOOk NOW
                </a>
            </div>
        </footer>
    );
}
