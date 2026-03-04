export const BackgroundImage = ({ src, alt }) => {
    return (
<div className="fixed -z-10 w-screen h-screen bg-linear-to-b from-background to-background/50 dark:bg-linear-to-b dark:from-black dark:to-gray-900 bg-cover bg-center"></div>
    );
}