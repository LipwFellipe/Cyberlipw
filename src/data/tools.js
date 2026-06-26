// Dados mockados de ferramentas de segurança.

export const tools = [
  {
    id: 1,
    name: 'Wireshark',
    type: 'Análise de Rede',
    icon: '🦈',
    description: 'Analisador de protocolos que captura e inspeciona o tráfego de rede em tempo real.',
    free: true,
  },
  {
    id: 2,
    name: 'Nmap',
    type: 'Reconhecimento',
    icon: '🛰️',
    description: 'Scanner de portas e serviços usado para mapear hosts e descobrir o que está exposto.',
    free: true,
  },
  {
    id: 3,
    name: 'Burp Suite',
    type: 'Pentest Web',
    icon: '🧪',
    description: 'Plataforma para testar segurança de aplicações web, interceptando e manipulando requisições.',
    free: false,
  },
  {
    id: 4,
    name: 'Metasploit',
    type: 'Exploração',
    icon: '💥',
    description: 'Framework para desenvolver e executar exploits em ambientes de teste autorizados.',
    free: true,
  },
  {
    id: 5,
    name: 'Bitwarden',
    type: 'Gerenciador de Senhas',
    icon: '🔐',
    description: 'Cofre de senhas open source que gera e guarda credenciais fortes com criptografia.',
    free: true,
  },
  {
    id: 6,
    name: 'OWASP ZAP',
    type: 'Pentest Web',
    icon: '⚡',
    description: 'Scanner de vulnerabilidades web gratuito mantido pela comunidade OWASP.',
    free: true,
  },
]
