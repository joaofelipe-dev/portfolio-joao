"use client";
import { Button } from "@/components/ui/button";
import { UserRound, PanelsTopLeft } from "lucide-react";
import { motion } from "motion/react"
import Link from "next/link";

export function Banner() {
    return (
        <section id="banner" className="w-full min-h-screen bg-cover bg-center dark:bg-[url('/wallpaper-dark.png')] bg-[url('/wallpaper-light.jpg')] p-5 md:p-10">
            <motion.div
                initial={{ x: 600, scale: 0.5 }}
                whileInView={{ x: 0, scale: 1, transition: { duration: 0.8 } }}
                viewport={{ once: false, amount: 0.5 }}
            
                className=" h-screen">
                <div
                    className="
            grid min-h-screen gap-6
            grid-cols-1 md:grid-cols-2
            md:grid-rows-5 items-center
            "
                >
                    {/* Título */}
                    <div className="md:col-start-1 md:row-span-2 flex items-center">
                        <h1 className="text-2xl md:text-7xl font-bold leading-tight">
                            Transformando ideias em experiências digitais incríveis
                        </h1>
                    </div>

                    {/* Subtítulo */}
                    <div className="md:col-start-1 md:row-start-3 flex items-center">
                        <h2 className="text-base md:text-xl">
                            Desenvolvedor Frontend | React | Next.js | Tailwind CSS. Vamos
                            criar algo incrível juntos!
                        </h2>
                    </div>

                    {/* Botões */}
                    <div className="md:col-start-1 md:row-start-4 flex items-center">
                        <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-6 w-full">
                            <Button className="flex items-center justify-center gap-2 w-40 h-10 md:w-56 md:h-12 lg:w-64">
                                <UserRound className="size-4 md:size-5" />
                                <span>Entre em contato</span>
                            </Button>
                            <Link href="#projetos">
                            <Button
                                className="flex items-center justify-center gap-2 w-40 h-10 md:w-52 md:h-12 lg:w-60"
                                variant="outline"
                                >
                                <PanelsTopLeft className="size-4 md:size-5" />
                                <span>Ver Projetos</span>
                            </Button>
                                </Link>
                        </div>
                    </div>

                    {/* Div lateral */}
                    <div
                        className="
              order-last md:order-none
              md:col-start-2 md:row-start-1 md:row-span-5
              flex items-center justify-center rounded-lg h-full mb-5
    "
                    >
                        <div className="flex flex-col items-center justify-center text-center gap-10 md:gap-16 py-10">
                            {/* Título principal */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold">Experiências</h2>
                            </div>

                            {/* Números e estatísticas (2x2 layout responsivo) */}
                            <div
                                className="
      grid grid-cols-1 sm:grid-cols-2
      gap-6 sm:gap-10 text-lg md:text-xl
      place-items-center
    "
                            >
                                <div className="flex flex-col items-center">
                                    <span className="text-3xl font-bold">1+</span>
                                    <span className="text-muted-foreground">
                                        Ano de Experiência
                                    </span>
                                </div>

                                <div className="flex flex-col items-center">
                                    <span className="text-3xl font-bold">37K+</span>
                                    <span className="text-muted-foreground">Xícaras de Café</span>
                                </div>

                                <div className="flex flex-col col-span-2 items-center">
                                    <span className="text-4xl font-bold">∞</span>
                                    <span className="text-muted-foreground">
                                        Linhas de Código
                                    </span>
                                </div>
                            </div>

                            {/* Tecnologias */}
                            <div className="flex flex-col items-center justify-center gap-6">
                                <h2 className="text-2xl md:text-3xl">Tecnologias</h2>
                                <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
                                    <a
                                        href="https://react.dev/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            className=" w-8 h-8 sm:w-10 sm:h-10"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            {/* React */}{" "}
                                            <path d="M21.718 12c0-1.429-1.339-2.681-3.467-3.5.029-.18.077-.37.1-.545.217-2.058-.273-3.543-1.379-4.182-1.235-.714-2.983-.186-4.751 1.239C10.45 3.589 8.7 3.061 7.468 3.773c-1.107.639-1.6 2.124-1.379 4.182.018.175.067.365.095.545-2.127.819-3.466 2.071-3.466 3.5 0 1.429 1.339 2.681 3.466 3.5-.028.18-.077.37-.095.545-.218 2.058.272 3.543 1.379 4.182.376.213.803.322 1.235.316a5.987 5.987 0 0 0 3.514-1.56 5.992 5.992 0 0 0 3.515 1.56 2.44 2.44 0 0 0 1.236-.316c1.106-.639 1.6-2.124 1.379-4.182-.019-.175-.067-.365-.1-.545 2.132-.819 3.471-2.071 3.471-3.5Zm-6.01-7.548a1.5 1.5 0 0 1 .76.187c.733.424 1.055 1.593.884 3.212-.012.106-.043.222-.058.33-.841-.243-1.7-.418-2.57-.523a16.165 16.165 0 0 0-1.747-1.972 4.9 4.9 0 0 1 2.731-1.234Zm-7.917 8.781c.172.34.335.68.529 1.017.194.337.395.656.6.969a14.09 14.09 0 0 1-1.607-.376 14.38 14.38 0 0 1 .478-1.61Zm-.479-4.076a14.085 14.085 0 0 1 1.607-.376c-.205.313-.405.634-.6.969-.195.335-.357.677-.529 1.017-.19-.527-.35-1.064-.478-1.61ZM8.3 12a19.32 19.32 0 0 1 .888-1.75c.33-.568.69-1.118 1.076-1.65.619-.061 1.27-.1 1.954-.1.684 0 1.333.035 1.952.1a19.63 19.63 0 0 1 1.079 1.654c.325.567.621 1.15.887 1.746a18.869 18.869 0 0 1-1.953 3.403 19.218 19.218 0 0 1-3.931 0 20.169 20.169 0 0 1-1.066-1.653A19.324 19.324 0 0 1 8.3 12Zm7.816 2.25c.2-.337.358-.677.53-1.017.191.527.35 1.065.478 1.611a14.48 14.48 0 0 1-1.607.376c.202-.314.404-.635.597-.97h.002Zm.53-3.483c-.172-.34-.335-.68-.53-1.017a20.214 20.214 0 0 0-.6-.97c.542.095 1.078.22 1.606.376a14.111 14.111 0 0 1-.478 1.611h.002ZM12.217 6.34c.4.375.777.773 1.13 1.193-.37-.02-.746-.033-1.129-.033s-.76.013-1.131.033c.353-.42.73-.817 1.13-1.193Zm-4.249-1.7a1.5 1.5 0 0 1 .76-.187 4.9 4.9 0 0 1 2.729 1.233A16.253 16.253 0 0 0 9.71 7.658c-.87.105-1.728.28-2.569.524-.015-.109-.047-.225-.058-.331-.171-1.619.151-2.787.885-3.211ZM3.718 12c0-.9.974-1.83 2.645-2.506.218.857.504 1.695.856 2.506-.352.811-.638 1.65-.856 2.506C4.692 13.83 3.718 12.9 3.718 12Zm4.25 7.361c-.734-.423-1.056-1.593-.885-3.212.011-.106.043-.222.058-.331.84.243 1.697.418 2.564.524a16.37 16.37 0 0 0 1.757 1.982c-1.421 1.109-2.714 1.488-3.494 1.037Zm3.11-2.895c.374.021.753.034 1.14.034.387 0 .765-.013 1.139-.034a14.4 14.4 0 0 1-1.14 1.215 14.248 14.248 0 0 1-1.139-1.215Zm5.39 2.895c-.782.451-2.075.072-3.5-1.038a16.248 16.248 0 0 0 1.757-1.981 16.41 16.41 0 0 0 2.565-.523c.015.108.046.224.058.33.175 1.619-.148 2.789-.88 3.212Zm1.6-4.854A16.563 16.563 0 0 0 17.216 12c.352-.812.638-1.65.856-2.507 1.671.677 2.646 1.607 2.646 2.507 0 .9-.975 1.83-2.646 2.507h-.004Z" />
                                            <path d="M12.215 13.773a1.792 1.792 0 1 0-1.786-1.8v.006a1.787 1.787 0 0 0 1.786 1.794Z" />
                                        </svg>
                                    </a>

                                    <a
                                        href="https://nextjs.org/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            className=" w-8 h-8 sm:w-10 sm:h-10"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 128 128"
                                        >
                                            {/* Next.js */}
                                            <path
                                                fill="currentColor"
                                                d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"
                                            />
                                        </svg>
                                    </a>

                                    <a
                                        href="https://tailwindcss.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            className=" w-8 h-8 sm:w-10 sm:h-10"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            {/* Tailwind */}
                                            <path d="M11.782 5.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231-1.253-.673-2.19-3.438-5.959-3.318ZM6.8 11.979A4.772 4.772 0 0 0 2 16.151a3.431 3.431 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231-1.253-.673-2.19-3.443-5.963-3.317Z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
