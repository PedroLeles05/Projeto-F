export function initHeader(){
    const header = document.querySelector('header');

        window.addEventListener('scroll', () =>{
            if(window.innerWidth < 640)return;

            if(window.scrollY > 500){
                header.classList.add('bg-primary/90', 'backdrop-blur-sm', 'p-9');
                header.classList.remove('bg-transparent', 'md:p-12');
                
                if (window.scrollY > 2000) {
                    header.classList.remove('bg-primary/90');
                    header.classList.add('bg-secondary/90', 'backdrop-blur-sm');
                }

                if(window.scrollY < 2000){
                    header.classList.remove('bg-secondary/90');
                    header.classList.add('bg-primary/90', 'backdrop-blur-sm');
                }
            }
            else{
                header.classList.remove('bg-primary/90', 'bg-secondary/90', 'backdrop-blur-sm', 'p-9');
                header.classList.add('bg-transparent', 'md:p-12');}
        });
}