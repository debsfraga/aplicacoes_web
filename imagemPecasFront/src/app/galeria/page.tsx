'use client'

import {ImageCard, Template} from '@/components'
import { useState } from 'react';

export default function GaleriaPage(){

    const image1 = 'https://pixabay.com/pt/illustrations/ai-gerado-besouro-inseto-placa-m%C3%A3e-8950217/'
    const image2 = 'https://pixabay.com/pt/photos/usb-tecnologia-computador-microchip-1284227/'

    const nome1 = 'Placa Mãe';
    const nome2 = 'Resistor';

    const [codigoImage, setCodigoImage] = useState<number>(2);
    const[urlImage, setUrlImage] = useState<string>(image2);

    const [nomeImage, setNomeImage] = useState<string>(nome2);

    function mudarImagem(){
        if(codigoImage == 1){
            setCodigoImage(2);
            setUrlImage(image2);
            setNomeImage(nome2)
        }else{
            setCodigoImage(1);
            setUrlImage(image1);
            setNomeImage(nome1)
        }

    }
    return(
        <Template>
            <section className="grid grid-cols-5 gap-5">
                <button onClick={mudarImagem}>Clique para Mudar</button>
                <ImageCard nome="Placa Mãe" tamanho="10mb" dataUpload="28/10/2026" src="https://media.istockphoto.com/id/1458825136/pt/foto/macro-close-up-of-components-and-microchips-on-pc-circuit-board.jpg?s=612x612&w=is&k=20&c=GgpAXCoJZBogslWcOldvoJRu2JGjO8r6R5FGVcr1Txg="/>
                <ImageCard nome={nomeImage} tamanho='10mb' dataUpload='28//10/2026' src={urlImage}/>
                <ImageCard nome={nomeImage} tamanho='10mb' dataUpload='28//10/2026' src={urlImage}/>
                <ImageCard nome={nomeImage} tamanho='10mb' dataUpload='28//10/2026' src={urlImage}/>
            </section>
          
        </Template>
    );
}

