'use client'

// import NossosClientes from '@/components/cliente/NossosClientes'
import TituloSlogan from '@/components/landing/TituloSlogan'

import ContainerComBackground from '@/components/shared/ContainerComBackground'
import NossosServicos from '@/components/servico/NossosServicos'
import NossosProfissionais from '@/components/profissional/NossosProfissionais'
import NossosClientes from '@/components/cliente/NossosClientes'

export default function Landing() {
    return (
        <div>
            <TituloSlogan />
            <ContainerComBackground imagem="/banners/servicos.webp">
                <NossosServicos />
            </ContainerComBackground>
            <ContainerComBackground imagem="/banners/profissionais.webp">
                <NossosProfissionais />
            </ContainerComBackground>
            <ContainerComBackground imagem="/banners/clientes.webp">
                <NossosClientes />
            </ContainerComBackground>
        </div>
    )
}
