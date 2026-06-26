// Dados mockados (locais) de ameaças de segurança.
// Usados para renderizar cards, filtros e a página de detalhe dinamicamente.

export const threats = [
  {
    id: 'phishing',
    name: 'Phishing',
    category: 'Engenharia Social',
    severity: 'Alta',
    icon: '🎣',
    summary: 'Mensagens falsas que se passam por fontes confiáveis para roubar credenciais e dados.',
    vector: 'E-mail, SMS e sites clonados',
    description:
      'O phishing engana a vítima fingindo ser uma empresa ou pessoa legítima. O atacante induz o usuário a clicar em links maliciosos ou informar senhas e dados bancários em páginas falsas.',
    mitigations: [
      'Desconfie de links e anexos não solicitados',
      'Verifique sempre o domínio real do remetente',
      'Ative a autenticação em dois fatores (2FA)',
      'Nunca informe senhas a partir de links de e-mail',
    ],
  },
  {
    id: 'ransomware',
    name: 'Ransomware',
    category: 'Malware',
    severity: 'Crítica',
    icon: '🔒',
    summary: 'Sequestra arquivos com criptografia e cobra resgate para liberar o acesso.',
    vector: 'Anexos, RDP exposto e vulnerabilidades',
    description:
      'O ransomware criptografa os dados da vítima e exige pagamento (geralmente em criptomoedas) para fornecer a chave de descriptografia. Pode paralisar empresas inteiras.',
    mitigations: [
      'Mantenha backups offline e testados',
      'Atualize sistemas e aplique patches',
      'Restrinja acessos administrativos',
      'Segmente a rede para conter a propagação',
    ],
  },
  {
    id: 'ddos',
    name: 'Ataque DDoS',
    category: 'Disponibilidade',
    severity: 'Média',
    icon: '🌊',
    summary: 'Sobrecarrega um serviço com tráfego falso até deixá-lo indisponível.',
    vector: 'Botnets e tráfego distribuído',
    description:
      'No DDoS (negação de serviço distribuída), milhares de dispositivos comprometidos enviam requisições simultâneas a um alvo, esgotando seus recursos e tirando o serviço do ar.',
    mitigations: [
      'Use CDN e proteção anti-DDoS',
      'Configure rate limiting',
      'Monitore picos anormais de tráfego',
      'Tenha um plano de resposta a incidentes',
    ],
  },
  {
    id: 'sql-injection',
    name: 'SQL Injection',
    category: 'Aplicação Web',
    severity: 'Alta',
    icon: '💉',
    summary: 'Injeta comandos SQL maliciosos por meio de campos de entrada vulneráveis.',
    vector: 'Formulários e parâmetros sem validação',
    description:
      'A injeção de SQL acontece quando entradas do usuário não são tratadas e acabam alterando consultas ao banco de dados, permitindo ler, modificar ou apagar informações sensíveis.',
    mitigations: [
      'Use consultas parametrizadas (prepared statements)',
      'Valide e sanitize toda entrada do usuário',
      'Aplique o princípio do menor privilégio no banco',
      'Use um WAF como camada extra',
    ],
  },
  {
    id: 'mitm',
    name: 'Man-in-the-Middle',
    category: 'Rede',
    severity: 'Alta',
    icon: '🕵️',
    summary: 'Intercepta a comunicação entre duas partes para espionar ou alterar dados.',
    vector: 'Wi-Fi público e redes não criptografadas',
    description:
      'No ataque MITM, o invasor se posiciona entre o usuário e o serviço, podendo capturar credenciais, cookies e dados trafegados sem que ninguém perceba.',
    mitigations: [
      'Use sempre HTTPS e VPN em redes públicas',
      'Evite Wi-Fi aberto para tarefas sensíveis',
      'Verifique certificados digitais',
      'Habilite HSTS nos servidores',
    ],
  },
  {
    id: 'zero-day',
    name: 'Zero-Day',
    category: 'Vulnerabilidade',
    severity: 'Crítica',
    icon: '🐛',
    summary: 'Explora falhas desconhecidas, antes de existir correção do fabricante.',
    vector: 'Falhas não divulgadas em software',
    description:
      'Um zero-day é uma vulnerabilidade ainda sem patch conhecido. Como não há correção disponível, é especialmente perigosa e valiosa para atacantes avançados.',
    mitigations: [
      'Mantenha defesa em camadas',
      'Monitore comportamento anômalo (EDR)',
      'Reduza a superfície de ataque',
      'Atualize assim que o patch for liberado',
    ],
  },
  {
    id: 'brute-force',
    name: 'Força Bruta',
    category: 'Autenticação',
    severity: 'Média',
    icon: '🔑',
    summary: 'Testa milhares de combinações de senha até acertar o acesso.',
    vector: 'Logins sem bloqueio de tentativas',
    description:
      'O ataque de força bruta tenta automaticamente diversas senhas até encontrar a correta. Senhas fracas e ausência de bloqueio tornam o alvo muito mais fácil.',
    mitigations: [
      'Exija senhas longas e únicas',
      'Bloqueie após várias tentativas falhas',
      'Use 2FA',
      'Adote um gerenciador de senhas',
    ],
  },
  {
    id: 'insider',
    name: 'Ameaça Interna',
    category: 'Pessoas',
    severity: 'Média',
    icon: '🚪',
    summary: 'Riscos vindos de dentro: funcionários ou parceiros com acesso indevido.',
    vector: 'Acessos excessivos e falta de controle',
    description:
      'A ameaça interna parte de quem já tem acesso legítimo. Pode ser intencional (sabotagem, vazamento) ou acidental (descuido), e costuma ser difícil de detectar.',
    mitigations: [
      'Aplique o princípio do menor privilégio',
      'Registre e audite acessos',
      'Revogue credenciais ao desligar pessoas',
      'Promova cultura de segurança',
    ],
  },
]

export const getThreatById = (id) => threats.find((t) => t.id === id)
