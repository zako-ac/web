import { Github } from "lucide-react"
import zakopsa from "@/assets/zakopsa.png"
import { Button } from "@/components/ui/button"

export function Footer() {
    return (
        <footer className="border-t border-border/50 bg-secondary/20">
            <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <img className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-sm font-bold text-primary-foreground" src={zakopsa} alt="Zakopsa" />
                            <span className="text-xl font-bold">자코</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">통화 채널을 더 다채롭게 만드는 디스코드 봇</p>
                        <div className="flex gap-2">
                            <Button variant="ghost" size="icon" className="rounded-full" onClick={() => window.open("https://github.com/zako-ac", "_blank")}>
                                <Github className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Resources */}
                    <div className="space-y-4">
                        <h3 className="font-semibold">리소스</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href={`${import.meta.env.VITE_DOCS_URL}/manual`} className="hover:text-foreground transition-colors">
                                    문서
                                </a>
                            </li>
                            <li>
                                <a href={`${import.meta.env.VITE_DOCS_URL}`} className="hover:text-foreground transition-colors">
                                    가이드
                                </a>
                            </li>
                            <li>
                                <a href={`${import.meta.env.VITE_DOCS_URL}/api`} className="hover:text-foreground transition-colors">
                                    API
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-foreground transition-colors">
                                    지원
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-4">
                        <h3 className="font-semibold">ZAKO</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href="#" className="hover:text-foreground transition-colors">
                                    블로그
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-foreground transition-colors">
                                    개인정보처리방침
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-foreground transition-colors">
                                    이용약관
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">© 2025 Walrus Lab. All rights reserved.</p>
                    <p className="text-sm text-muted-foreground">Made with ❤️ for Discord communities</p>
                </div>
            </div>
        </footer>
    )
}
