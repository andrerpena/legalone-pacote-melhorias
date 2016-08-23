window._menu = [
    {
        displayName: 'Contatos',
        url: '/contatos',
        icon: 'user',
        menu: [
            {
                displayName: 'Painel',
                url: '/contatos',
                icon: 'bar-chart',
                menu: [
                    {
                        displayName: 'Alterar painel',
                        url: '/config/widgets/edit/contatos?returnUrl=%2Fcontatos',
                        icon: 'pencil'
                    }
                ]
            },
            {
                displayName: 'Contatos',
                url: '/contatos/contatos/search',
                icon: 'user',
                menu: [
                    {
                        displayName: 'Nova pessoa física',
                        icon: 'plus-circle',
                        url: '/contatos/pessoas/create'
                    },
                    {
                        displayName: 'Nova pessoa jurídica',
                        icon: 'plus-circle',
                        url: '/contatos/empresas/create'
                    },
                    {
                        displayName: 'Gerar relatório padrão',
                        icon: 'bolt',
                        url: '/contatos/ReportContatos/listacontatosgerar/53?ReportTitle=Contatos&ExportTo=0'
                    },
                    {
                        displayName: 'Auditar contatos',
                        icon: 'search',
                        url: '/shared/auditoria/search?TipoObjeto=Novajus.Model.AGN_Pessoa%2CNovajus.Model.AGN_Empresa&titulo=Auditando%20pessoas%20f%C3%ADsicas%2Fjur%C3%ADdicas'
                    }
                ]
            },
            {
                displayName: 'Relatórios',
                url: '/contatos/reportcontatos',
                icon: 'pie-chart',
                menu: [
                    {
                        displayName: 'Relatórios gerados',
                        icon: 'list',
                        url: '/contatos/reportcontatos/Search',
                        menu: [
                            {
                                displayName: 'Alterar painel',
                                url: '/config/widgets/edit/contatos?returnUrl=%2Fcontatos',
                                icon: 'pencil'
                            }
                        ]
                    },
                    {
                        displayName: 'Novo modelo de relatório genérico de contato',
                        icon: 'plus-circle',
                        url: '/contatos/GenericReport?TipoAcaoModeloRelatorio=1'
                    },
                    {
                        displayName: 'Novo modelo de relatório genérico de pessoa física',
                        icon: 'plus-circle',
                        url: '/contatos/PessoasGenericReport?TipoAcaoModeloRelatorio=1'
                    },
                    {
                        displayName: 'Novo modelo de relatório genérico de pessoa jurídica',
                        icon: 'plus-circle',
                        url: '/contatos/EmpresasGenericReport?TipoAcaoModeloRelatorio=1'
                    }
                ]
            }
        ]
    },
    {
        displayName: 'Agenda',
        url: '/agenda/compromissotarefa',
        icon: 'calendar-o',
        menu: [
            {
                displayName: 'Painel',
                url: '/agenda',
                icon: 'bar-chart',
                menu: [
                    {
                        displayName: 'Alterar painel',
                        url: '/config/widgets/edit/agenda?returnUrl=%2Fagenda',
                        icon: 'pencil'
                    }
                ]
            },
            {
                displayName: 'Compromissos e tarefas',
                url: '/agenda/compromissotarefa',
                icon: 'calendar-o',
                menu: [
                    {
                        displayName: 'Visualizar lista',
                        url: '/agenda/compromissotarefa/search',
                        icon: 'list'
                    },
                    {
                        displayName: 'Novo compromisso',
                        icon: 'plus-circle',
                        url: '/agenda/compromissos/create'
                    },
                    {
                        displayName: 'Nova tarefa',
                        icon: 'plus-circle',
                        url: '/agenda/tarefas/create'
                    },
                    {
                        displayName: 'Auditar compromissos e tarefas',
                        icon: 'search',
                        url: '/shared/auditoria/search?TipoObjeto=Novajus.Model.AGN_CompromissoTarefa&titulo=Auditando%20compromissos%20e%20tarefas'
                    }
                ]
            },
            {
                displayName: 'Agenda do escritório',
                url: '/agenda/AgendaEscritorio',
                icon: 'calendar-o'
            },
            {
                displayName: 'Relatórios',
                url: '/agenda/reportagenda',
                icon: 'pie-chart',
                menu: [
                    {
                        displayName: 'Relatórios gerados',
                        icon: 'list',
                        url: '/agenda/reportagenda/Search'
                    },
                    {
                        displayName: 'Novo modelo de relatório genérico',
                        icon: 'plus-circle',
                        url: 'href="/agenda/GenericReport?TipoAcaoModeloRelatorio=1"'
                    },
                    {
                        displayName: 'Novo modelo de relatório genérico de compromisso',
                        icon: 'plus-circle',
                        url: '/agenda/CompromissoGenericReport?TipoAcaoModeloRelatorio=1'
                    },
                    {
                        displayName: 'Novo modelo de relatório genérico de tarefa',
                        icon: 'plus-circle',
                        url: '/agenda/TarefaGenericReport?TipoAcaoModeloRelatorio=1'
                    }
                ]
            }
        ]
    },
    {
        displayName: 'Processos',
        url: '/processos/processos/search',
        icon: 'legal',
        menu: [
            {
                displayName: 'Painel',
                url: '/processos',
                icon: 'bar-chart',
                menu: [
                    {
                        displayName: 'Alterar painel',
                        url: '/config/widgets/edit/processos?returnUrl=%2Fprocessos',
                        icon: 'pencil'
                    }
                ]
            },
            {
                displayName: 'Pastas',
                url: '/processos/processos/search',
                icon: 'legal',
                menu: [
                    {
                        displayName: 'Novo processo',
                        url: '/processos/processos/create',
                        icon: 'plus-circle'
                    },
                    {
                        displayName: 'Novo recurso',
                        icon: 'plus-circle',
                        url: '/processos/Recursos/create'
                    },
                    {
                        displayName: 'Novo incidente',
                        icon: 'plus-circle',
                        url: '/processos/Incidentes/create'
                    },
                    {
                        displayName: 'Gerar relatório padrão',
                        icon: 'bolt',
                        url: '/processos/ReportProcessos/listaprocessosgerar/44?ReportTitle=Processos&ExportTo=0'
                    },
                    {
                        displayName: 'Auditar processos',
                        icon: 'search',
                        url: '/shared/auditoria/search?TipoObjeto=Novajus.Model.PRO_Processo&titulo=Auditando%20processos%2Frecursos%2Fincidentes'
                    }
                ]
            },
            {
                displayName: 'Casos',
                url: '/processos/casos',
                icon: 'legal'
            },
            {
                displayName: 'Relatórios',
                url: '/processos/reportprocessos',
                icon: 'pie-chart',
                menu: [
                    {
                        displayName: 'Relatórios gerados',
                        icon: 'list',
                        url: '/processos/reportprocessos/Search'
                    },
                    {
                        displayName: 'Novo modelo de relatório genérico',
                        icon: 'plus-circle',
                        url: '/processos/GenericReport?TipoAcaoModeloRelatorio=1'
                    }
                ]
            }
        ]
    },
    {
        displayName: 'Serviços',
        icon: 'tasks',
        menu: [
            {
                displayName: 'Painel',
                url: '/servicos',
                icon: 'bar-chart',
            },
            {
                displayName: 'Pastas',
                url: '/servicos/servicos/search',
                icon: 'folder'
            },
            {
                displayName: 'Relatórios',
                url: '/servicos/reportservicos',
                icon: 'pie-chart'
            }
        ]
    },
    {
        displayName: 'Contratos',
        url: '/contratos/contratocliente',
        icon: 'file-word-o',
        menu: [
            {
                displayName: 'Painel',
                url: '/contratos',
                icon: 'bar-chart',
            },
            {
                displayName: 'Contratos de cliente',
                url: '/contratos/contratocliente',
                icon: 'file-word-o',
            },
            {
                displayName: 'Contratos de honorário',
                url: '/contratos/contratos',
                icon: 'file-word-o',
            },
            {
                displayName: 'Relatórios',
                url: '/contratos/reportcontratos',
                icon: 'pie-chart'
            }
        ]
    },
    {
        displayName: 'Financeiro',
        url: '/financeiro/obrigacoes/Search',
        icon: 'dollar',
        menu: [
            {
                displayName: 'Painel',
                url: '/financeiro',
                icon: 'bar-chart',
            },
            {
                displayName: 'Contas a pagar e receber',
                url: '/financeiro/obrigacoes/Search',
                icon: 'dollar'
            },
            {
                displayName: 'Fluxo de caixa',
                url: '/financeiro/movimentos/search',
                icon: 'dollar'
            },
            {
                displayName: 'Inadimplência',
                url: '/financeiro/Inadimplencias/search',
                icon: 'dollar'
            },
            {
                displayName: 'Solicitações',
                url: '/financeiro/Solicitacoes/search',
                icon: 'dollar'
            },
            {
                displayName: 'Conciliação',
                url: '/financeiro/Conciliacao/search',
                icon: 'dollar'
            },
            {
                displayName: 'Análises',
                url: '/financeiro/analises',
                icon: 'area-chart'
            },
            {
                displayName: 'Relatórios',
                url: '/financeiro/ReportFinanceiro',
                icon: 'pie-chart'
            }
        ]
    },
    {
        displayName: 'Faturamento',
        url: '/faturamento/itemfaturavel/search',
        icon: 'dollar',
        menu: [
            {
                displayName: 'Painel',
                url: '/faturamento/HomeFaturamento/Index',
                icon: 'bar-chart',
            },
            {
                displayName: 'Itens faturáveis',
                url: '/faturamento/itemfaturavel/search',
                icon: 'dollar',
            },
            {
                displayName: 'Emissão',
                url: '/faturamento/emissao/search',
                icon: 'dollar',
            },
            {
                displayName: 'Emitidas',
                url: '/faturamento/emitida/search',
                icon: 'dollar',
            },
            {
                displayName: 'Relatórios',
                url: '/faturamento/ReportFaturamento/index',
                icon: 'pie-chart'
            }
        ]
    },
    {
        displayName: 'Boletos',
        url: '/boletos',
        icon: 'dollar',
        menu: [
            {
                displayName: 'Painel',
                url: '/boletos/HomeBoleto/Index',
                icon: 'bar-chart',
            },
            {
                displayName: 'Emissão',
                url: '/boletos',
                icon: 'dollar',
            },
            {
                displayName: 'Emitidos',
                url: '/boletos/Emitidos',
                icon: 'dollar',
            },
            {
                displayName: 'Conciliação',
                url: '/boletos/ConciliacaoBoleto',
                icon: 'dollar',
            },
            {
                displayName: 'Relatórios',
                url: '/boletos/ReportBoleto/index',
                icon: 'pie-chart'
            }
        ]
    },
    {
        displayName: 'GED',
        url: '/GED/HomeGED',
        icon: 'file-pdf-o',
        menu: [
            {
                displayName: 'Painel',
                url: '/GED/HomeGED',
                icon: 'bar-chart',
            },
            {
                displayName: 'Arquivos',
                url: '/GED/GEDArquivos/Search',
                icon: 'file-pdf-o',
            },
            {
                displayName: 'Gerador de documentos',
                url: '/GED/GeradorDocumentos/Search',
                icon: 'file-pdf-o',
            },
            {
                displayName: 'Relatórios',
                url: '/GED/ReportGED',
                icon: 'pie-chart'
            }
        ]
    },
    {
        displayName: 'Acervo jurídico',
        url: '/acervojuridico/acervojuridico/search',
        icon: 'newspaper-o',
        menu: [
            {
                displayName: 'Revista dos Tribunais Online',
                url: '/acervojuridico/acervojuridico/search',
                icon: 'newspaper-o'
            }
        ]
    },
    {
        displayName: 'Time Sheet',
        url: '/TimeSheet/HorasTrabalhadas/Search',
        icon: 'clock-o',
        menu: [
            {
                displayName: 'Painel',
                url: '/TimeSheet/HomeTimeSheet',
                icon: 'bar-chart',
            },
            {
                displayName: 'Horas trabalhadas',
                url: '/TimeSheet/HorasTrabalhadas/Search',
                icon: 'clock-o',
            },
            {
                displayName: 'Análises',
                url: '/TimeSheet/analises',
                icon: 'area-chart'
            },
            {
                displayName: 'Relatórios',
                url: '/TimeSheet/ReportTimeSheet',
                icon: 'pie-chart'
            }
        ]
    },
    {
        displayName: 'Workflow',
        url: 'https://workflow.novajus.com.br/',
        icon: 'superscript',
    },
    {
        displayName: 'Mesas de trabalho',
        url: '/MesasTrabalho',
        icon: 'star-o'
    },
    {
        displayName: 'Opções',
        url: '/config/ferramentas',
        icon: 'cogs',
        menu: [
            {
                displayName: 'Ferramentas',
                url: '/config/ferramentas',
                icon: 'wrench',
            },
            {
                displayName: 'Configurações',
                url: '/config/configuracoes',
                icon: 'cog',
            },
            {
                displayName: 'Tabelas de sistema',
                url: '/config/TabelasSistema',
                icon: 'table'
            },
            {
                displayName: 'Controle de acesso',
                url: '/config/CA',
                icon: 'lock'
            },
            {
                displayName: 'Usuários',
                url: '/config/usuarios',
                icon: 'user'
            },
            {
                displayName: 'Escritórios associados',
                url: '/config/EscritorioAssociado'
            },
            {
                displayName: 'Personalizações',
                url: '/Personalizacoes/Modulos/Search',
                icon: 'puzzle-piece'
            },
            {
                displayName: 'Listas em Excel',
                url: '/config/reportconfig/search',
                icon: 'file-excel-o'
            },
            {
                displayName: 'Manuais',
                url: '/config/Manuais',
                icon: 'file-pdf-o'
            },
            {
                displayName: 'Sobre',
                url: '/config/Sobre',
                icon: 'question-circle'
            }
        ]
    }
];