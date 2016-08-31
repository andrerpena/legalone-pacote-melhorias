var menu = [
    {
        displayName: 'Contatos',
        url: '/contatos/contatos/search',
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
                        url: '/contatos/reportcontatos/Search'
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
                        url: '/config/widgets/edit/processos',
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
        url: '/servicos/servicos/search',
        menu: [
            {
                displayName: 'Painel',
                url: '/servicos',
                icon: 'bar-chart',
                menu: [
                    {
                        displayName: 'Alterar painel',
                        url: '/config/widgets/edit/servicos',
                        icon: 'pencil'
                    }
                ]
            },
            {
                displayName: 'Pastas',
                url: '/servicos/servicos/search',
                icon: 'folder',
                menu: [
                    {
                        displayName: 'Novo serviço',
                        url: '/servicos/servicos/create',
                        icon: 'plus-circle'
                    },
                    {
                        displayName: 'Gerar relatório padrão',
                        icon: 'bolt',
                        url: '/servicos/ReportServicos/listaservicosgerar/38?ReportTitle=Servi%C3%A7os&ExportTo=0'
                    },
                    {
                        displayName: 'Auditar serviços',
                        icon: 'search',
                        url: '/shared/auditoria/search?TipoObjeto=Novajus.Model.SER_Servico&titulo=Auditando%20servi%C3%A7os'
                    }
                ]
            },
            {
                displayName: 'Relatórios',
                url: '/servicos/reportservicos',
                icon: 'pie-chart',
                menu: [
                    {
                        displayName: 'Relatórios gerados',
                        icon: 'list',
                        url: '/servicos/reportservicos/Search'
                    },
                    {
                        displayName: 'Novo modelo de relatório genérico',
                        icon: 'plus-circle',
                        url: '/servicos/GenericReport?TipoAcaoModeloRelatorio=1'
                    }
                ]
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
                menu: [
                    {
                        displayName: 'Alterar painel',
                        url: '/config/widgets/edit/contratos',
                        icon: 'pencil'
                    }
                ]
            },
            {
                displayName: 'Contratos de cliente',
                url: '/contratos/contratocliente',
                icon: 'file-word-o',
                menu: [
                    {
                        displayName: 'Novo contrato de cliente',
                        url: '/contratos/contratocliente/create',
                        icon: 'plus-circle'
                    },
                    {
                        displayName: 'Novo aditivo de contrato de cliente',
                        icon: 'plus-circle',
                        url: '/contratos/contratoAditivo/create?returnUrl=%2Fcontratos%2Fcontratocliente%2Fsearch'
                    },
                    {
                        displayName: 'Gerar relatório padrão',
                        icon: 'bolt',
                        url: '/contratos/ReportContratos/listacontratosclientegerar/1487?ReportTitle=Contratos%20de%20cliente&ExportTo=0'
                    },
                    {
                        displayName: 'Auditar contratos de cliente/aditivos',
                        icon: 'search',
                        url: '/shared/auditoria/search?TipoObjeto=Novajus.Model.CON_Contrato_Cliente%2CNovajus.Model.CON_Contrato&titulo=Auditando%20contratos&contextType=6'
                    }
                ]
            },
            {
                displayName: 'Contratos de honorário',
                url: '/contratos/contratos',
                icon: 'file-word-o',
                menu: [
                    {
                        displayName: 'Novo contrato de honorário',
                        url: '/contratos/contratos/create?returnUrl=%2Fcontratos%2Fcontratos%2Fsearch',
                        icon: 'plus-circle'
                    },
                    {
                        displayName: 'Gerar relatório padrão',
                        icon: 'bolt',
                        url: '/contratos/ReportContratos/listacontratoshonorariogerar/30?ReportTitle=Contratos%20de%20honor%C3%A1rios&ExportTo=0'
                    },
                    {
                        displayName: 'Auditar contratos de honorário',
                        icon: 'search',
                        url: '/shared/auditoria/search?TipoObjeto=Novajus.Model.CON_Contrato_Honorario%2CNovajus.Model.CON_Contrato&titulo=Auditando%20contratos&contextType=5'
                    }
                ]
            },
            {
                displayName: 'Relatórios',
                url: '/contratos/reportcontratos',
                icon: 'pie-chart',
                menu: [
                    {
                        displayName: 'Relatórios gerados',
                        icon: 'list',
                        url: '/contratos/reportcontratos/Search'
                    },
                    {
                        displayName: 'Novo modelo de relatório genérico de contrato de honorário',
                        icon: 'plus-circle',
                        url: '/contratos/ContratoHonorarioGenericReport?TipoAcaoModeloRelatorio=1'
                    },
                    {
                        displayName: 'Novo modelo de relatório genérico de contrato de cliente',
                        icon: 'plus-circle',
                        url: '/contratos/ContratoClienteGenericReport?TipoAcaoModeloRelatorio=1'
                    }
                ]
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
                menu: [
                    {
                        displayName: 'Alterar painel',
                        url: '/config/widgets/edit/financeiro?returnUrl=%2Ffinanceiro',
                        icon: 'pencil'
                    }
                ]
            },
            {
                displayName: 'Contas a pagar e receber',
                url: '/financeiro/obrigacoes/Search',
                icon: 'dollar',
                menu: [
                    {
                        displayName: 'Nova obrigação a pagar',
                        url: '/financeiro/obrigacoesapagar/create',
                        icon: 'plus-circle'
                    },
                    {
                        displayName: 'Nova obrigação a receber',
                        icon: 'plus-circle',
                        url: '/financeiro/obrigacoesareceber/create'
                    },
                    {
                        displayName: 'Nova transferência',
                        icon: 'plus-circle',
                        url: '/financeiro/transferencias/create'
                    },
                    {
                        displayName: 'Novo pedido de reembolso (sem desembolso)',
                        icon: 'plus-circle',
                        url: '/financeiro/pedidoreembolso/create'
                    },
                    {
                        displayName: 'Conciliação de boletos',
                        icon: 'arrow-circle-o-right',
                        url: '/boletos/ConciliacaoBoleto'
                    },
                    {
                        displayName: 'Regras de cobrança',
                        icon: 'dollar',
                        url: '/config/RegraCobranca/Search'
                    },
                    {
                        displayName: 'Gerar relatório padrão',
                        icon: 'bolt',
                        url: '/financeiro/ReportFinanceiro/listaobrigacoesmovimentosgerar/27?ReportTitle=Movimentos%20de%20obriga%C3%A7%C3%B5es&ExportTo=0'
                    },
                    {
                        displayName: 'Auditar obrigações',
                        icon: 'search',
                        url: '/shared/auditoria/search?TipoObjeto=Novajus.Model.FIN_Obrigacao%2CNovajus.Model.FIN_Classificacao&titulo=Auditando%20obriga%C3%A7%C3%B5es%20a%20pagar%20e%20a%20receber&contextType=0'
                    }
                ]
            },
            {
                displayName: 'Fluxo de caixa',
                url: '/financeiro/movimentos/search',
                icon: 'dollar',
                menu: [
                    {
                        displayName: 'Gerar relatório padrão',
                        icon: 'bolt',
                        url: '/financeiro/ReportFinanceiro/listafluxocaixagerar/23?ReportTitle=Fluxo%20de%20caixa&ExportTo=0'
                    }
                ]
            },
            {
                displayName: 'Inadimplência',
                url: '/financeiro/Inadimplencias/search',
                icon: 'dollar',
                menu: [
                    {
                        displayName: 'Gerar relatório padrão',
                        icon: 'bolt',
                        url: '/financeiro/ReportFinanceiro/listainadimplenciagerar/108?ReportTitle=Inadimpl%C3%AAncia&ExportTo=0'
                    }
                ]
            },
            {
                displayName: 'Solicitações',
                url: '/financeiro/Solicitacoes/search',
                icon: 'dollar',
                menu: [
                    {
                        displayName: 'Gerar relatório padrão',
                        icon: 'bolt',
                        url: '/financeiro/ReportFinanceiro/listasolicitacoesgerar/110?ReportTitle=Solicita%C3%A7%C3%B5es&ExportTo=0'
                    },
                    {
                        displayName: 'Auditar solicitações',
                        icon: 'search',
                        url: '/shared/auditoria/search?TipoObjeto=Novajus.Model.FIN_Obrigacao%2CNovajus.Model.FIN_Classificacao&titulo=Auditando%20solicita%C3%A7%C3%B5es&contextType=1'
                    }
                ]
            },
            {
                displayName: 'Conciliação',
                url: '/financeiro/Conciliacao/search',
                icon: 'dollar',
                menu: [
                    {
                        displayName: 'Nova obrigação a pagar',
                        url: '/financeiro/obrigacoesapagar/create',
                        icon: 'plus-circle'
                    },
                    {
                        displayName: 'Nova obrigação a receber',
                        icon: 'plus-circle',
                        url: '/financeiro/obrigacoesareceber/create'
                    },
                    {
                        displayName: 'Nova transferência',
                        icon: 'plus-circle',
                        url: '/financeiro/transferencias/create'
                    },
                ]
            },
            {
                displayName: 'Análises',
                url: '/financeiro/analises',
                icon: 'area-chart',
                menu: [
                    {
                        displayName: 'Áreas (visão econômica)',
                        icon: 'area-chart',
                        url: '/financeiro/areas/search'
                    },
                    {
                        displayName: 'Projetos (visão econômica)',
                        icon: 'area-chart',
                        url: '/financeiro/projetos/search'
                    },
                    {
                        displayName: 'Plano de contas (visão econômica)',
                        icon: 'area-chart',
                        url: '/financeiro/PlanoContas/search'
                    },
                    {
                        displayName: 'Unidades de custeio (visão econômica)',
                        icon: 'area-chart',
                        url: '/financeiro/unidadescusteio/search'
                    }
                ]
            },
            {
                displayName: 'Relatórios',
                url: '/financeiro/ReportFinanceiro/SearchModelos',
                icon: 'pie-chart',
                menu: [
                    {
                        displayName: 'Relatórios gerados',
                        icon: 'list',
                        url: '/financeiro/reportfinanceiro/Search'
                    },
                    {
                        displayName: 'Novo modelo de relatório genérico de obrigações',
                        icon: 'plus-circle',
                        url: '/financeiro/GenericReport?TipoAcaoModeloRelatorio=1'
                    },
                    {
                        displayName: 'Novo modelo de relatório genérico de solicitações',
                        icon: 'plus-circle',
                        url: '/financeiro/SolicitacaoGenericReport?TipoAcaoModeloRelatorio=1'
                    },
                    {
                        displayName: 'Novo modelo de relatório genérico de obrigações a pagar',
                        icon: 'plus-circle',
                        url: '/financeiro/ObrigacaoPagarGenericReport?TipoAcaoModeloRelatorio=1'
                    },
                    {
                        displayName: 'Novo modelo de relatório genérico de obrigações a receber',
                        icon: 'plus-circle',
                        url: '/financeiro/ObrigacaoReceberGenericReport?TipoAcaoModeloRelatorio=1'
                    },
                    {
                        displayName: 'Novo modelo de relatório genérico de pedido de reembolso (sem desembolso)',
                        icon: 'plus-circle',
                        url: '/financeiro/PedidoReembolsoGenericReport?TipoAcaoModeloRelatorio=1'
                    }
                ]
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
                menu: [
                    {
                        displayName: 'Alterar painel',
                        url: '/config/widgets/edit/faturamento',
                        icon: 'pencil'
                    }
                ]
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
                icon: 'pie-chart',
                menu: [
                    {
                        displayName: 'Relatórios gerados',
                        icon: 'list',
                        url: '/faturamento/reportfaturamento/Search'
                    }
                ]
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
                menu: [
                    {
                        displayName: 'Alterar painel',
                        url: '/config/widgets/edit/boletos',
                        icon: 'pencil'
                    }
                ]
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
                menu: [
                    {
                        displayName: 'Gerar relatório padrão',
                        icon: 'bolt',
                        url: '/boletos/ReportBoleto/listaboletocontacorrentegerar/199?ReportTitle=Boletos%20emitidos%20por%20conta%20corrente&ExportTo=0'
                    }
                ]
            },
            {
                displayName: 'Conciliação',
                url: '/boletos/ConciliacaoBoleto',
                icon: 'dollar',
                menu: [
                    {
                        displayName: 'Nova conciliação',
                        url: '/boletos/ConciliacaoBoleto/create',
                        icon: 'plus-circle'
                    }
                ]
            },
            {
                displayName: 'Relatórios',
                url: '/boletos/ReportBoleto/index',
                icon: 'pie-chart',
                menu: [
                    {
                        displayName: 'Relatórios gerados',
                        icon: 'list',
                        url: '/boletos/reportboleto'
                    }
                ]
            }
        ]
    },
    {
        displayName: 'GED',
        url: '/GED/GEDArquivos/Search',
        icon: 'file-pdf-o',
        menu: [
            {
                displayName: 'Painel',
                url: '/GED/HomeGED',
                icon: 'bar-chart',
                menu: [
                    {
                        displayName: 'Alterar painel',
                        url: '/config/widgets/edit/geds',
                        icon: 'pencil'
                    }
                ]
            },
            {
                displayName: 'Arquivos',
                url: '/GED/GEDArquivos/Search',
                icon: 'file-pdf-o',
                menu: [
                    {
                        displayName: 'Anexar arquivo',
                        icon: 'paperclip',
                        url: '/GED/GEDArquivos/create?returnUrl=%2FGED%2FGEDArquivos%2FSearch'
                    },
                    {
                        displayName: 'Gerar documento',
                        icon: 'files-o',
                        url: '/GED/GeradorDocumentos/Generate?returnUrl=%2FGED%2FGEDArquivos%2FSearch'
                    },
                    {
                        displayName: 'Gerar relatório padrão',
                        icon: 'bolt',
                        url: '/GED/ReportGED/listagedgerar/22?ReportTitle=GED&ExportTo=0'
                    },
                    {
                        displayName: 'Auditar arquivos',
                        icon: 'search',
                        url: '/shared/auditoria/search?TipoObjeto=Novajus.Model.GED_Arquivo&titulo=Auditando%20arquivos'
                    }
                ]
            },
            {
                displayName: 'Gerador de documentos',
                url: '/GED/GeradorDocumentos/Search',
                icon: 'file-pdf-o',
                menu: [
                    {
                        displayName: 'Novo modelo de documento',
                        icon: 'plus-circle',
                        url: '/GED/GeradorDocumentos/Create?returnUrl=%2FGED%2FGeradorDocumentos%2FSearch'
                    },
                    {
                        displayName: 'Gerar documento',
                        icon: 'files-o',
                        url: '/GED/GeradorDocumentos/Generate'
                    },
                    {
                        displayName: 'Auditar modelos de documento',
                        icon: 'search',
                        url: '/shared/Auditoria/Search?TipoObjeto=Novajus.Model.GED_ModeloDocumento&titulo=Auditando%20modelos%20de%20documento'
                    }
                ]
            },
            {
                displayName: 'Relatórios',
                url: '/GED/ReportGED',
                icon: 'pie-chart',
                menu: [
                    {
                        displayName: 'Relatórios gerados',
                        icon: 'list',
                        url: '/GED/reportged/Search'
                    },
                    {
                        displayName: 'Novo modelo de relatório genérico',
                        icon: 'plus-circle',
                        url: '/GED/GenericReport?TipoAcaoModeloRelatorio=1'
                    },
                ]
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
                menu: [
                    {
                        displayName: 'Alterar painel',
                        url: '/config/widgets/edit/timesheet?returnUrl=%2FTimeSheet%2FHomeTimeSheet',
                        icon: 'pencil'
                    }
                ]
            },
            {
                displayName: 'Horas trabalhadas',
                url: '/TimeSheet/HorasTrabalhadas/Search',
                icon: 'clock-o',
                menu: [
                    {
                        displayName: 'Nova hora trabalhada',
                        icon: 'plus-circle',
                        url: '/TimeSheet/HorasTrabalhadas/CreateHoraTrabalhada'
                    },
                    {
                        displayName: 'Nova hora trabalhada em lote',
                        icon: 'plus-circle',
                        url: '/TimeSheet/HorasTrabalhadas/CreateHoraTrabalhadaLote'
                    },
                    {
                        displayName: 'Gerar relatório padrão',
                        icon: 'bolt',
                        url: '/TimeSheet/ReportTimeSheet/listahorastrabalhadasporexecutantesituacaogerar/169?SituacoesSimples%5B0%5D.Id=3&SituacoesSimples%5B0%5D.Value=Pendente&ReportTitle=Horas%20trabalhadas%20por%20executante%20e%20situa%C3%A7%C3%A3o&ExportTo=0'
                    },
                    {
                        displayName: 'Auditar horas trabalhadas',
                        icon: 'search',
                        url: '/shared/auditoria/search?TipoObjeto=Novajus.Model.TMS_HoraTrabalhada&titulo=Auditando%20horas%20trabalhadas'
                    }
                ]
            },
            {
                displayName: 'Análises',
                url: '/TimeSheet/analises',
                icon: 'area-chart',
                menu: [
                    {
                        displayName: 'Áreas',
                        icon: 'area-chart',
                        url: '/TimeSheet/Analises/Area'
                    },
                    {
                        displayName: 'Executantes',
                        icon: 'area-chart',
                        url: '/TimeSheet/Analises/Executante'
                    },
                    {
                        displayName: 'Produtividade',
                        icon: 'area-chart',
                        url: '/TimeSheet/Analises/Produtividade'
                    },
                    {
                        displayName: 'Vínculos da origem',
                        icon: 'area-chart',
                        url: '/TimeSheet/Analises/VinculoOrigem'
                    }
                ]
            },
            {
                displayName: 'Relatórios',
                url: '/TimeSheet/ReportTimeSheet',
                icon: 'pie-chart',
                menu: [
                    {
                        displayName: 'Relatórios gerados',
                        icon: 'list',
                        url: '/TimeSheet/reporttimesheet/Search'
                    },
                    {
                        displayName: 'Novo modelo de relatório genérico',
                        icon: 'plus-circle',
                        url: '/TimeSheet/GenericReport?TipoAcaoModeloRelatorio=1'
                    }
                ]
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
        icon: 'star-o',
        menu: [
            {
                displayName: 'Nova mesa',
                icon: 'plus-circle',
                url: '/MesasTrabalho/mesas/create?returnUrl=%2FMesasTrabalho%2FMesas%2FSearch'
            },
        ]
    },
    {
        displayName: 'Opções',
        url: '/config/ferramentas',
        icon: 'cogs',
        menu: [
            {
                displayName: 'Ferramentas',
                url: '/config/ferramentas',
                icon: 'wrench'
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

function processMenu(menu, prefix) {
    for (var i = 0; i < menu.length; i++) {
        var menuItem = menu[i];
        menuItem.displayNameFull = prefix + " " + menuItem.displayName;
        if(menuItem.menu)
            processMenu(menuItem.menu, menuItem.displayNameFull);
    }
}

module.exports = function()
{
    processMenu(menu, "");
    return menu;
}
