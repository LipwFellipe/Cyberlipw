// Dados mockados de trilhas de aprendizado.

export const tracks = [
  {
    id: 1,
    title: 'Fundamentos de Segurança',
    level: 'Iniciante',
    icon: '🧱',
    lessons: 8,
    topics: ['CIA Triad', 'Senhas fortes', '2FA', 'Higiene digital'],
  },
  {
    id: 2,
    title: 'Segurança de Aplicações Web',
    level: 'Intermediário',
    icon: '🌐',
    lessons: 12,
    topics: ['OWASP Top 10', 'XSS', 'SQL Injection', 'CSRF'],
  },
  {
    id: 3,
    title: 'Defesa de Redes',
    level: 'Intermediário',
    icon: '🛡️',
    lessons: 10,
    topics: ['Firewalls', 'VPN', 'Segmentação', 'Monitoramento'],
  },
  {
    id: 4,
    title: 'Resposta a Incidentes',
    level: 'Avançado',
    icon: '🚨',
    lessons: 9,
    topics: ['Detecção', 'Contenção', 'Forense', 'Recuperação'],
  },
]

export const tips = [
  'Use um gerenciador de senhas e nunca repita senhas entre serviços.',
  'Ative a autenticação em dois fatores em todas as contas importantes.',
  'Desconfie de urgência: golpes adoram pressão e prazos curtos.',
  'Mantenha sistema e aplicativos sempre atualizados.',
  'Faça backups regulares e teste a restauração de vez em quando.',
  'Em Wi-Fi público, prefira sempre uma VPN.',
]
