/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(1);
	var Vue = __webpack_require__(2);

	var Sidebar = __webpack_require__(9);

	$(".main-bar").before(`<sidebar></sidebar>`);

	new Vue({
	    el: 'div.main',
	    components: {
	        sidebar: Sidebar
	    }
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = Vue;

/***/ },
/* 3 */
/***/ function(module, exports) {

	var menu = [{
	    displayName: 'Contatos',
	    url: '/contatos',
	    icon: 'user',
	    menu: [{
	        displayName: 'Painel',
	        url: '/contatos',
	        icon: 'bar-chart',
	        menu: [{
	            displayName: 'Alterar painel',
	            url: '/config/widgets/edit/contatos?returnUrl=%2Fcontatos',
	            icon: 'pencil'
	        }]
	    }, {
	        displayName: 'Contatos',
	        url: '/contatos/contatos/search',
	        icon: 'user',
	        menu: [{
	            displayName: 'Nova pessoa física',
	            icon: 'plus-circle',
	            url: '/contatos/pessoas/create'
	        }, {
	            displayName: 'Nova pessoa jurídica',
	            icon: 'plus-circle',
	            url: '/contatos/empresas/create'
	        }, {
	            displayName: 'Gerar relatório padrão',
	            icon: 'bolt',
	            url: '/contatos/ReportContatos/listacontatosgerar/53?ReportTitle=Contatos&ExportTo=0'
	        }, {
	            displayName: 'Auditar contatos',
	            icon: 'search',
	            url: '/shared/auditoria/search?TipoObjeto=Novajus.Model.AGN_Pessoa%2CNovajus.Model.AGN_Empresa&titulo=Auditando%20pessoas%20f%C3%ADsicas%2Fjur%C3%ADdicas'
	        }]
	    }, {
	        displayName: 'Relatórios',
	        url: '/contatos/reportcontatos',
	        icon: 'pie-chart',
	        menu: [{
	            displayName: 'Relatórios gerados',
	            icon: 'list',
	            url: '/contatos/reportcontatos/Search'
	        }, {
	            displayName: 'Novo modelo de relatório genérico de contato',
	            icon: 'plus-circle',
	            url: '/contatos/GenericReport?TipoAcaoModeloRelatorio=1'
	        }, {
	            displayName: 'Novo modelo de relatório genérico de pessoa física',
	            icon: 'plus-circle',
	            url: '/contatos/PessoasGenericReport?TipoAcaoModeloRelatorio=1'
	        }, {
	            displayName: 'Novo modelo de relatório genérico de pessoa jurídica',
	            icon: 'plus-circle',
	            url: '/contatos/EmpresasGenericReport?TipoAcaoModeloRelatorio=1'
	        }]
	    }]
	}, {
	    displayName: 'Agenda',
	    url: '/agenda/compromissotarefa',
	    icon: 'calendar-o',
	    menu: [{
	        displayName: 'Painel',
	        url: '/agenda',
	        icon: 'bar-chart',
	        menu: [{
	            displayName: 'Alterar painel',
	            url: '/config/widgets/edit/agenda?returnUrl=%2Fagenda',
	            icon: 'pencil'
	        }]
	    }, {
	        displayName: 'Compromissos e tarefas',
	        url: '/agenda/compromissotarefa',
	        icon: 'calendar-o',
	        menu: [{
	            displayName: 'Visualizar lista',
	            url: '/agenda/compromissotarefa/search',
	            icon: 'list'
	        }, {
	            displayName: 'Novo compromisso',
	            icon: 'plus-circle',
	            url: '/agenda/compromissos/create'
	        }, {
	            displayName: 'Nova tarefa',
	            icon: 'plus-circle',
	            url: '/agenda/tarefas/create'
	        }, {
	            displayName: 'Auditar compromissos e tarefas',
	            icon: 'search',
	            url: '/shared/auditoria/search?TipoObjeto=Novajus.Model.AGN_CompromissoTarefa&titulo=Auditando%20compromissos%20e%20tarefas'
	        }]
	    }, {
	        displayName: 'Agenda do escritório',
	        url: '/agenda/AgendaEscritorio',
	        icon: 'calendar-o'
	    }, {
	        displayName: 'Relatórios',
	        url: '/agenda/reportagenda',
	        icon: 'pie-chart',
	        menu: [{
	            displayName: 'Relatórios gerados',
	            icon: 'list',
	            url: '/agenda/reportagenda/Search'
	        }, {
	            displayName: 'Novo modelo de relatório genérico',
	            icon: 'plus-circle',
	            url: 'href="/agenda/GenericReport?TipoAcaoModeloRelatorio=1"'
	        }, {
	            displayName: 'Novo modelo de relatório genérico de compromisso',
	            icon: 'plus-circle',
	            url: '/agenda/CompromissoGenericReport?TipoAcaoModeloRelatorio=1'
	        }, {
	            displayName: 'Novo modelo de relatório genérico de tarefa',
	            icon: 'plus-circle',
	            url: '/agenda/TarefaGenericReport?TipoAcaoModeloRelatorio=1'
	        }]
	    }]
	}, {
	    displayName: 'Processos',
	    url: '/processos/processos/search',
	    icon: 'legal',
	    menu: [{
	        displayName: 'Painel',
	        url: '/processos',
	        icon: 'bar-chart',
	        menu: [{
	            displayName: 'Alterar painel',
	            url: '/config/widgets/edit/processos',
	            icon: 'pencil'
	        }]
	    }, {
	        displayName: 'Pastas',
	        url: '/processos/processos/search',
	        icon: 'legal',
	        menu: [{
	            displayName: 'Novo processo',
	            url: '/processos/processos/create',
	            icon: 'plus-circle'
	        }, {
	            displayName: 'Novo recurso',
	            icon: 'plus-circle',
	            url: '/processos/Recursos/create'
	        }, {
	            displayName: 'Novo incidente',
	            icon: 'plus-circle',
	            url: '/processos/Incidentes/create'
	        }, {
	            displayName: 'Gerar relatório padrão',
	            icon: 'bolt',
	            url: '/processos/ReportProcessos/listaprocessosgerar/44?ReportTitle=Processos&ExportTo=0'
	        }, {
	            displayName: 'Auditar processos',
	            icon: 'search',
	            url: '/shared/auditoria/search?TipoObjeto=Novajus.Model.PRO_Processo&titulo=Auditando%20processos%2Frecursos%2Fincidentes'
	        }]
	    }, {
	        displayName: 'Casos',
	        url: '/processos/casos',
	        icon: 'legal'
	    }, {
	        displayName: 'Relatórios',
	        url: '/processos/reportprocessos',
	        icon: 'pie-chart',
	        menu: [{
	            displayName: 'Relatórios gerados',
	            icon: 'list',
	            url: '/processos/reportprocessos/Search'
	        }, {
	            displayName: 'Novo modelo de relatório genérico',
	            icon: 'plus-circle',
	            url: '/processos/GenericReport?TipoAcaoModeloRelatorio=1'
	        }]
	    }]
	}, {
	    displayName: 'Serviços',
	    icon: 'tasks',
	    url: '/servicos/servicos/search',
	    menu: [{
	        displayName: 'Painel',
	        url: '/servicos',
	        icon: 'bar-chart',
	        menu: [{
	            displayName: 'Alterar painel',
	            url: '/config/widgets/edit/servicos',
	            icon: 'pencil'
	        }]
	    }, {
	        displayName: 'Pastas',
	        url: '/servicos/servicos/search',
	        icon: 'folder',
	        menu: [{
	            displayName: 'Novo serviço',
	            url: '/servicos/servicos/create',
	            icon: 'plus-circle'
	        }, {
	            displayName: 'Gerar relatório padrão',
	            icon: 'bolt',
	            url: '/servicos/ReportServicos/listaservicosgerar/38?ReportTitle=Servi%C3%A7os&ExportTo=0'
	        }, {
	            displayName: 'Auditar serviços',
	            icon: 'search',
	            url: '/shared/auditoria/search?TipoObjeto=Novajus.Model.SER_Servico&titulo=Auditando%20servi%C3%A7os'
	        }]
	    }, {
	        displayName: 'Relatórios',
	        url: '/servicos/reportservicos',
	        icon: 'pie-chart',
	        menu: [{
	            displayName: 'Relatórios gerados',
	            icon: 'list',
	            url: '/servicos/reportservicos/Search'
	        }, {
	            displayName: 'Novo modelo de relatório genérico',
	            icon: 'plus-circle',
	            url: '/servicos/GenericReport?TipoAcaoModeloRelatorio=1'
	        }]
	    }]
	}, {
	    displayName: 'Contratos',
	    url: '/contratos/contratocliente',
	    icon: 'file-word-o',
	    menu: [{
	        displayName: 'Painel',
	        url: '/contratos',
	        icon: 'bar-chart',
	        menu: [{
	            displayName: 'Alterar painel',
	            url: '/config/widgets/edit/contratos',
	            icon: 'pencil'
	        }]
	    }, {
	        displayName: 'Contratos de cliente',
	        url: '/contratos/contratocliente',
	        icon: 'file-word-o',
	        menu: [{
	            displayName: 'Novo contrato de cliente',
	            url: '/contratos/contratocliente/create',
	            icon: 'plus-circle'
	        }, {
	            displayName: 'Novo aditivo de contrato de cliente',
	            icon: 'plus-circle',
	            url: '/contratos/contratoAditivo/create?returnUrl=%2Fcontratos%2Fcontratocliente%2Fsearch'
	        }, {
	            displayName: 'Gerar relatório padrão',
	            icon: 'bolt',
	            url: '/contratos/ReportContratos/listacontratosclientegerar/1487?ReportTitle=Contratos%20de%20cliente&ExportTo=0'
	        }, {
	            displayName: 'Auditar contratos de cliente/aditivos',
	            icon: 'search',
	            url: '/shared/auditoria/search?TipoObjeto=Novajus.Model.CON_Contrato_Cliente%2CNovajus.Model.CON_Contrato&titulo=Auditando%20contratos&contextType=6'
	        }]
	    }, {
	        displayName: 'Contratos de honorário',
	        url: '/contratos/contratos',
	        icon: 'file-word-o',
	        menu: [{
	            displayName: 'Novo contrato de honorário',
	            url: '/contratos/contratos/create?returnUrl=%2Fcontratos%2Fcontratos%2Fsearch',
	            icon: 'plus-circle'
	        }, {
	            displayName: 'Gerar relatório padrão',
	            icon: 'bolt',
	            url: '/contratos/ReportContratos/listacontratoshonorariogerar/30?ReportTitle=Contratos%20de%20honor%C3%A1rios&ExportTo=0'
	        }, {
	            displayName: 'Auditar contratos de honorário',
	            icon: 'search',
	            url: '/shared/auditoria/search?TipoObjeto=Novajus.Model.CON_Contrato_Honorario%2CNovajus.Model.CON_Contrato&titulo=Auditando%20contratos&contextType=5'
	        }]
	    }, {
	        displayName: 'Relatórios',
	        url: '/contratos/reportcontratos',
	        icon: 'pie-chart',
	        menu: [{
	            displayName: 'Relatórios gerados',
	            icon: 'list',
	            url: '/contratos/reportcontratos/Search'
	        }, {
	            displayName: 'Novo modelo de relatório genérico de contrato de honorário',
	            icon: 'plus-circle',
	            url: '/contratos/ContratoHonorarioGenericReport?TipoAcaoModeloRelatorio=1'
	        }, {
	            displayName: 'Novo modelo de relatório genérico de contrato de cliente',
	            icon: 'plus-circle',
	            url: '/contratos/ContratoClienteGenericReport?TipoAcaoModeloRelatorio=1'
	        }]
	    }]
	}, {
	    displayName: 'Financeiro',
	    url: '/financeiro/obrigacoes/Search',
	    icon: 'dollar',
	    menu: [{
	        displayName: 'Painel',
	        url: '/financeiro',
	        icon: 'bar-chart',
	        menu: [{
	            displayName: 'Alterar painel',
	            url: '/config/widgets/edit/financeiro?returnUrl=%2Ffinanceiro',
	            icon: 'pencil'
	        }]
	    }, {
	        displayName: 'Contas a pagar e receber',
	        url: '/financeiro/obrigacoes/Search',
	        icon: 'dollar',
	        menu: [{
	            displayName: 'Nova obrigação a pagar',
	            url: '/financeiro/obrigacoesapagar/create',
	            icon: 'plus-circle'
	        }, {
	            displayName: 'Nova obrigação a receber',
	            icon: 'plus-circle',
	            url: '/financeiro/obrigacoesareceber/create'
	        }, {
	            displayName: 'Nova transferência',
	            icon: 'plus-circle',
	            url: '/financeiro/transferencias/create'
	        }, {
	            displayName: 'Novo pedido de reembolso (sem desembolso)',
	            icon: 'plus-circle',
	            url: '/financeiro/pedidoreembolso/create'
	        }, {
	            displayName: 'Conciliação de boletos',
	            icon: 'arrow-circle-o-right',
	            url: '/boletos/ConciliacaoBoleto'
	        }, {
	            displayName: 'Regras de cobrança',
	            icon: 'dollar',
	            url: '/config/RegraCobranca/Search'
	        }, {
	            displayName: 'Gerar relatório padrão',
	            icon: 'bolt',
	            url: '/financeiro/ReportFinanceiro/listaobrigacoesmovimentosgerar/27?ReportTitle=Movimentos%20de%20obriga%C3%A7%C3%B5es&ExportTo=0'
	        }, {
	            displayName: 'Auditar obrigações',
	            icon: 'search',
	            url: '/shared/auditoria/search?TipoObjeto=Novajus.Model.FIN_Obrigacao%2CNovajus.Model.FIN_Classificacao&titulo=Auditando%20obriga%C3%A7%C3%B5es%20a%20pagar%20e%20a%20receber&contextType=0'
	        }]
	    }, {
	        displayName: 'Fluxo de caixa',
	        url: '/financeiro/movimentos/search',
	        icon: 'dollar',
	        menu: [{
	            displayName: 'Gerar relatório padrão',
	            icon: 'bolt',
	            url: '/financeiro/ReportFinanceiro/listafluxocaixagerar/23?ReportTitle=Fluxo%20de%20caixa&ExportTo=0'
	        }]
	    }, {
	        displayName: 'Inadimplência',
	        url: '/financeiro/Inadimplencias/search',
	        icon: 'dollar',
	        menu: [{
	            displayName: 'Gerar relatório padrão',
	            icon: 'bolt',
	            url: '/financeiro/ReportFinanceiro/listainadimplenciagerar/108?ReportTitle=Inadimpl%C3%AAncia&ExportTo=0'
	        }]
	    }, {
	        displayName: 'Solicitações',
	        url: '/financeiro/Solicitacoes/search',
	        icon: 'dollar',
	        menu: [{
	            displayName: 'Gerar relatório padrão',
	            icon: 'bolt',
	            url: '/financeiro/ReportFinanceiro/listasolicitacoesgerar/110?ReportTitle=Solicita%C3%A7%C3%B5es&ExportTo=0'
	        }, {
	            displayName: 'Auditar solicitações',
	            icon: 'search',
	            url: '/shared/auditoria/search?TipoObjeto=Novajus.Model.FIN_Obrigacao%2CNovajus.Model.FIN_Classificacao&titulo=Auditando%20solicita%C3%A7%C3%B5es&contextType=1'
	        }]
	    }, {
	        displayName: 'Conciliação',
	        url: '/financeiro/Conciliacao/search',
	        icon: 'dollar',
	        menu: [{
	            displayName: 'Nova obrigação a pagar',
	            url: '/financeiro/obrigacoesapagar/create',
	            icon: 'plus-circle'
	        }, {
	            displayName: 'Nova obrigação a receber',
	            icon: 'plus-circle',
	            url: '/financeiro/obrigacoesareceber/create'
	        }, {
	            displayName: 'Nova transferência',
	            icon: 'plus-circle',
	            url: '/financeiro/transferencias/create'
	        }]
	    }, {
	        displayName: 'Análises',
	        url: '/financeiro/analises',
	        icon: 'area-chart',
	        menu: [{
	            displayName: 'Áreas (visão econômica)',
	            icon: 'area-chart',
	            url: '/financeiro/areas/search'
	        }, {
	            displayName: 'Projetos (visão econômica)',
	            icon: 'area-chart',
	            url: '/financeiro/projetos/search'
	        }, {
	            displayName: 'Plano de contas (visão econômica)',
	            icon: 'area-chart',
	            url: '/financeiro/PlanoContas/search'
	        }, {
	            displayName: 'Unidades de custeio (visão econômica)',
	            icon: 'area-chart',
	            url: '/financeiro/unidadescusteio/search'
	        }]
	    }, {
	        displayName: 'Relatórios',
	        url: '/financeiro/ReportFinanceiro/SearchModelos',
	        icon: 'pie-chart',
	        menu: [{
	            displayName: 'Relatórios gerados',
	            icon: 'list',
	            url: '/financeiro/reportfinanceiro/Search'
	        }, {
	            displayName: 'Novo modelo de relatório genérico de obrigações',
	            icon: 'plus-circle',
	            url: '/financeiro/GenericReport?TipoAcaoModeloRelatorio=1'
	        }, {
	            displayName: 'Novo modelo de relatório genérico de solicitações',
	            icon: 'plus-circle',
	            url: '/financeiro/SolicitacaoGenericReport?TipoAcaoModeloRelatorio=1'
	        }, {
	            displayName: 'Novo modelo de relatório genérico de obrigações a pagar',
	            icon: 'plus-circle',
	            url: '/financeiro/ObrigacaoPagarGenericReport?TipoAcaoModeloRelatorio=1'
	        }, {
	            displayName: 'Novo modelo de relatório genérico de obrigações a receber',
	            icon: 'plus-circle',
	            url: '/financeiro/ObrigacaoReceberGenericReport?TipoAcaoModeloRelatorio=1'
	        }, {
	            displayName: 'Novo modelo de relatório genérico de pedido de reembolso (sem desembolso)',
	            icon: 'plus-circle',
	            url: '/financeiro/PedidoReembolsoGenericReport?TipoAcaoModeloRelatorio=1'
	        }]
	    }]
	}, {
	    displayName: 'Faturamento',
	    url: '/faturamento/itemfaturavel/search',
	    icon: 'dollar',
	    menu: [{
	        displayName: 'Painel',
	        url: '/faturamento/HomeFaturamento/Index',
	        icon: 'bar-chart',
	        menu: [{
	            displayName: 'Alterar painel',
	            url: '/config/widgets/edit/faturamento',
	            icon: 'pencil'
	        }]
	    }, {
	        displayName: 'Itens faturáveis',
	        url: '/faturamento/itemfaturavel/search',
	        icon: 'dollar'
	    }, {
	        displayName: 'Emissão',
	        url: '/faturamento/emissao/search',
	        icon: 'dollar'
	    }, {
	        displayName: 'Emitidas',
	        url: '/faturamento/emitida/search',
	        icon: 'dollar'
	    }, {
	        displayName: 'Relatórios',
	        url: '/faturamento/ReportFaturamento/index',
	        icon: 'pie-chart',
	        menu: [{
	            displayName: 'Relatórios gerados',
	            icon: 'list',
	            url: '/faturamento/reportfaturamento/Search'
	        }]
	    }]
	}, {
	    displayName: 'Boletos',
	    url: '/boletos',
	    icon: 'dollar',
	    menu: [{
	        displayName: 'Painel',
	        url: '/boletos/HomeBoleto/Index',
	        icon: 'bar-chart',
	        menu: [{
	            displayName: 'Alterar painel',
	            url: '/config/widgets/edit/boletos',
	            icon: 'pencil'
	        }]
	    }, {
	        displayName: 'Emissão',
	        url: '/boletos',
	        icon: 'dollar'
	    }, {
	        displayName: 'Emitidos',
	        url: '/boletos/Emitidos',
	        icon: 'dollar',
	        menu: [{
	            displayName: 'Gerar relatório padrão',
	            icon: 'bolt',
	            url: '/boletos/ReportBoleto/listaboletocontacorrentegerar/199?ReportTitle=Boletos%20emitidos%20por%20conta%20corrente&ExportTo=0'
	        }]
	    }, {
	        displayName: 'Conciliação',
	        url: '/boletos/ConciliacaoBoleto',
	        icon: 'dollar',
	        menu: [{
	            displayName: 'Nova conciliação',
	            url: '/boletos/ConciliacaoBoleto/create',
	            icon: 'plus-circle'
	        }]
	    }, {
	        displayName: 'Relatórios',
	        url: '/boletos/ReportBoleto/index',
	        icon: 'pie-chart',
	        menu: [{
	            displayName: 'Relatórios gerados',
	            icon: 'list',
	            url: '/boletos/reportboleto'
	        }]
	    }]
	}, {
	    displayName: 'GED',
	    url: '/GED/GEDArquivos/Search',
	    icon: 'file-pdf-o',
	    menu: [{
	        displayName: 'Painel',
	        url: '/GED/HomeGED',
	        icon: 'bar-chart',
	        menu: [{
	            displayName: 'Alterar painel',
	            url: '/config/widgets/edit/geds',
	            icon: 'pencil'
	        }]
	    }, {
	        displayName: 'Arquivos',
	        url: '/GED/GEDArquivos/Search',
	        icon: 'file-pdf-o',
	        menu: [{
	            displayName: 'Anexar arquivo',
	            icon: 'paperclip',
	            url: '/GED/GEDArquivos/create?returnUrl=%2FGED%2FGEDArquivos%2FSearch'
	        }, {
	            displayName: 'Gerar documento',
	            icon: 'files-o',
	            url: '/GED/GeradorDocumentos/Generate?returnUrl=%2FGED%2FGEDArquivos%2FSearch'
	        }, {
	            displayName: 'Gerar relatório padrão',
	            icon: 'bolt',
	            url: '/GED/ReportGED/listagedgerar/22?ReportTitle=GED&ExportTo=0'
	        }, {
	            displayName: 'Auditar arquivos',
	            icon: 'search',
	            url: '/shared/auditoria/search?TipoObjeto=Novajus.Model.GED_Arquivo&titulo=Auditando%20arquivos'
	        }]
	    }, {
	        displayName: 'Gerador de documentos',
	        url: '/GED/GeradorDocumentos/Search',
	        icon: 'file-pdf-o',
	        menu: [{
	            displayName: 'Novo modelo de documento',
	            icon: 'plus-circle',
	            url: '/GED/GeradorDocumentos/Create?returnUrl=%2FGED%2FGeradorDocumentos%2FSearch'
	        }, {
	            displayName: 'Gerar documento',
	            icon: 'files-o',
	            url: '/GED/GeradorDocumentos/Generate'
	        }, {
	            displayName: 'Auditar modelos de documento',
	            icon: 'search',
	            url: '/shared/Auditoria/Search?TipoObjeto=Novajus.Model.GED_ModeloDocumento&titulo=Auditando%20modelos%20de%20documento'
	        }]
	    }, {
	        displayName: 'Relatórios',
	        url: '/GED/ReportGED',
	        icon: 'pie-chart',
	        menu: [{
	            displayName: 'Relatórios gerados',
	            icon: 'list',
	            url: '/GED/reportged/Search'
	        }, {
	            displayName: 'Novo modelo de relatório genérico',
	            icon: 'plus-circle',
	            url: '/GED/GenericReport?TipoAcaoModeloRelatorio=1'
	        }]
	    }]
	}, {
	    displayName: 'Acervo jurídico',
	    url: '/acervojuridico/acervojuridico/search',
	    icon: 'newspaper-o',
	    menu: [{
	        displayName: 'Revista dos Tribunais Online',
	        url: '/acervojuridico/acervojuridico/search',
	        icon: 'newspaper-o'
	    }]
	}, {
	    displayName: 'Time Sheet',
	    url: '/TimeSheet/HorasTrabalhadas/Search',
	    icon: 'clock-o',
	    menu: [{
	        displayName: 'Painel',
	        url: '/TimeSheet/HomeTimeSheet',
	        icon: 'bar-chart',
	        menu: [{
	            displayName: 'Alterar painel',
	            url: '/config/widgets/edit/timesheet?returnUrl=%2FTimeSheet%2FHomeTimeSheet',
	            icon: 'pencil'
	        }]
	    }, {
	        displayName: 'Horas trabalhadas',
	        url: '/TimeSheet/HorasTrabalhadas/Search',
	        icon: 'clock-o',
	        menu: [{
	            displayName: 'Nova hora trabalhada',
	            icon: 'plus-circle',
	            url: '/TimeSheet/HorasTrabalhadas/CreateHoraTrabalhada'
	        }, {
	            displayName: 'Nova hora trabalhada em lote',
	            icon: 'plus-circle',
	            url: '/TimeSheet/HorasTrabalhadas/CreateHoraTrabalhadaLote'
	        }, {
	            displayName: 'Gerar relatório padrão',
	            icon: 'bolt',
	            url: '/TimeSheet/ReportTimeSheet/listahorastrabalhadasporexecutantesituacaogerar/169?SituacoesSimples%5B0%5D.Id=3&SituacoesSimples%5B0%5D.Value=Pendente&ReportTitle=Horas%20trabalhadas%20por%20executante%20e%20situa%C3%A7%C3%A3o&ExportTo=0'
	        }, {
	            displayName: 'Auditar horas trabalhadas',
	            icon: 'search',
	            url: '/shared/auditoria/search?TipoObjeto=Novajus.Model.TMS_HoraTrabalhada&titulo=Auditando%20horas%20trabalhadas'
	        }]
	    }, {
	        displayName: 'Análises',
	        url: '/TimeSheet/analises',
	        icon: 'area-chart',
	        menu: [{
	            displayName: 'Áreas',
	            icon: 'area-chart',
	            url: '/TimeSheet/Analises/Area'
	        }, {
	            displayName: 'Executantes',
	            icon: 'area-chart',
	            url: '/TimeSheet/Analises/Executante'
	        }, {
	            displayName: 'Produtividade',
	            icon: 'area-chart',
	            url: '/TimeSheet/Analises/Produtividade'
	        }, {
	            displayName: 'Vínculos da origem',
	            icon: 'area-chart',
	            url: '/TimeSheet/Analises/VinculoOrigem'
	        }]
	    }, {
	        displayName: 'Relatórios',
	        url: '/TimeSheet/ReportTimeSheet',
	        icon: 'pie-chart',
	        menu: [{
	            displayName: 'Relatórios gerados',
	            icon: 'list',
	            url: '/TimeSheet/reporttimesheet/Search'
	        }, {
	            displayName: 'Novo modelo de relatório genérico',
	            icon: 'plus-circle',
	            url: '/TimeSheet/GenericReport?TipoAcaoModeloRelatorio=1'
	        }]
	    }]
	}, {
	    displayName: 'Workflow',
	    url: 'https://workflow.novajus.com.br/',
	    icon: 'superscript'
	}, {
	    displayName: 'Mesas de trabalho',
	    url: '/MesasTrabalho',
	    icon: 'star-o',
	    menu: [{
	        displayName: 'Nova mesa',
	        icon: 'plus-circle',
	        url: '/MesasTrabalho/mesas/create?returnUrl=%2FMesasTrabalho%2FMesas%2FSearch'
	    }]
	}, {
	    displayName: 'Opções',
	    url: '/config/ferramentas',
	    icon: 'cogs',
	    menu: [{
	        displayName: 'Ferramentas',
	        url: '/config/ferramentas',
	        icon: 'wrench'
	    }, {
	        displayName: 'Configurações',
	        url: '/config/configuracoes',
	        icon: 'cog'
	    }, {
	        displayName: 'Tabelas de sistema',
	        url: '/config/TabelasSistema',
	        icon: 'table'
	    }, {
	        displayName: 'Controle de acesso',
	        url: '/config/CA',
	        icon: 'lock'
	    }, {
	        displayName: 'Usuários',
	        url: '/config/usuarios',
	        icon: 'user'
	    }, {
	        displayName: 'Escritórios associados',
	        url: '/config/EscritorioAssociado'
	    }, {
	        displayName: 'Personalizações',
	        url: '/Personalizacoes/Modulos/Search',
	        icon: 'puzzle-piece'
	    }, {
	        displayName: 'Listas em Excel',
	        url: '/config/reportconfig/search',
	        icon: 'file-excel-o'
	    }, {
	        displayName: 'Manuais',
	        url: '/config/Manuais',
	        icon: 'file-pdf-o'
	    }, {
	        displayName: 'Sobre',
	        url: '/config/Sobre',
	        icon: 'question-circle'
	    }]
	}];

	function processMenu(menu, prefix) {
	    for (var i = 0; i < menu.length; i++) {
	        var menuItem = menu[i];
	        menuItem.displayNameFull = prefix + " " + menuItem.displayName;
	        if (menuItem.menu) processMenu(menuItem.menu, menuItem.displayNameFull);
	    }
	}

	module.exports = function () {
	    processMenu(menu, "");
	    return menu;
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function clone(item) {

	    if (!item) {
	        return item;
	    } // null, undefined values check

	    var types = [Number, String, Boolean],
	        result;

	    // normalizing primitives if someone did new String('aaa'), or new Number('444');
	    types.forEach(function (type) {
	        if (item instanceof type) {
	            result = type(item);
	        }
	    });

	    if (typeof result == "undefined") {
	        if (Object.prototype.toString.call(item) === "[object Array]") {
	            result = [];
	            item.forEach(function (child, index, array) {
	                result[index] = clone(child);
	            });
	        } else if (typeof item == "object") {
	            // testing that this is DOM
	            if (item.nodeType && typeof item.cloneNode == "function") {
	                var result = item.cloneNode(true);
	            } else if (!item.prototype) {
	                // check that this is a literal
	                if (item instanceof Date) {
	                    result = new Date(item);
	                } else {
	                    // it is an object literal
	                    result = {};
	                    for (var i in item) {
	                        result[i] = clone(item[i]);
	                    }
	                }
	            } else {
	                // depending what you would like here,
	                // just keep the reference, or create new object
	                if (false) {
	                    // would not advice to do that, reason? Read below
	                    result = new item.constructor();
	                } else {
	                    result = item;
	                }
	            }
	        } else {
	            result = item;
	        }
	    }

	    return result;
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	var defaultDiacriticsRemovalMap = [{ 'base': 'A', 'letters': '\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F' }, { 'base': 'AA', 'letters': '\uA732' }, { 'base': 'AE', 'letters': '\u00C6\u01FC\u01E2' }, { 'base': 'AO', 'letters': '\uA734' }, { 'base': 'AU', 'letters': '\uA736' }, { 'base': 'AV', 'letters': '\uA738\uA73A' }, { 'base': 'AY', 'letters': '\uA73C' }, { 'base': 'B', 'letters': '\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181' }, { 'base': 'C', 'letters': '\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E' }, { 'base': 'D', 'letters': '\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779' }, { 'base': 'DZ', 'letters': '\u01F1\u01C4' }, { 'base': 'Dz', 'letters': '\u01F2\u01C5' }, { 'base': 'E', 'letters': '\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E' }, { 'base': 'F', 'letters': '\u0046\u24BB\uFF26\u1E1E\u0191\uA77B' }, { 'base': 'G', 'letters': '\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E' }, { 'base': 'H', 'letters': '\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D' }, { 'base': 'I', 'letters': '\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197' }, { 'base': 'J', 'letters': '\u004A\u24BF\uFF2A\u0134\u0248' }, { 'base': 'K', 'letters': '\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2' }, { 'base': 'L', 'letters': '\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780' }, { 'base': 'LJ', 'letters': '\u01C7' }, { 'base': 'Lj', 'letters': '\u01C8' }, { 'base': 'M', 'letters': '\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C' }, { 'base': 'N', 'letters': '\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4' }, { 'base': 'NJ', 'letters': '\u01CA' }, { 'base': 'Nj', 'letters': '\u01CB' }, { 'base': 'O', 'letters': '\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C' }, { 'base': 'OI', 'letters': '\u01A2' }, { 'base': 'OO', 'letters': '\uA74E' }, { 'base': 'OU', 'letters': '\u0222' }, { 'base': 'OE', 'letters': '\u008C\u0152' }, { 'base': 'oe', 'letters': '\u009C\u0153' }, { 'base': 'P', 'letters': '\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754' }, { 'base': 'Q', 'letters': '\u0051\u24C6\uFF31\uA756\uA758\u024A' }, { 'base': 'R', 'letters': '\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782' }, { 'base': 'S', 'letters': '\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784' }, { 'base': 'T', 'letters': '\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786' }, { 'base': 'TZ', 'letters': '\uA728' }, { 'base': 'U', 'letters': '\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244' }, { 'base': 'V', 'letters': '\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245' }, { 'base': 'VY', 'letters': '\uA760' }, { 'base': 'W', 'letters': '\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72' }, { 'base': 'X', 'letters': '\u0058\u24CD\uFF38\u1E8A\u1E8C' }, { 'base': 'Y', 'letters': '\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE' }, { 'base': 'Z', 'letters': '\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762' }, { 'base': 'a', 'letters': '\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250' }, { 'base': 'aa', 'letters': '\uA733' }, { 'base': 'ae', 'letters': '\u00E6\u01FD\u01E3' }, { 'base': 'ao', 'letters': '\uA735' }, { 'base': 'au', 'letters': '\uA737' }, { 'base': 'av', 'letters': '\uA739\uA73B' }, { 'base': 'ay', 'letters': '\uA73D' }, { 'base': 'b', 'letters': '\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253' }, { 'base': 'c', 'letters': '\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184' }, { 'base': 'd', 'letters': '\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A' }, { 'base': 'dz', 'letters': '\u01F3\u01C6' }, { 'base': 'e', 'letters': '\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD' }, { 'base': 'f', 'letters': '\u0066\u24D5\uFF46\u1E1F\u0192\uA77C' }, { 'base': 'g', 'letters': '\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F' }, { 'base': 'h', 'letters': '\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265' }, { 'base': 'hv', 'letters': '\u0195' }, { 'base': 'i', 'letters': '\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131' }, { 'base': 'j', 'letters': '\u006A\u24D9\uFF4A\u0135\u01F0\u0249' }, { 'base': 'k', 'letters': '\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3' }, { 'base': 'l', 'letters': '\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747' }, { 'base': 'lj', 'letters': '\u01C9' }, { 'base': 'm', 'letters': '\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F' }, { 'base': 'n', 'letters': '\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5' }, { 'base': 'nj', 'letters': '\u01CC' }, { 'base': 'o', 'letters': '\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275' }, { 'base': 'oi', 'letters': '\u01A3' }, { 'base': 'ou', 'letters': '\u0223' }, { 'base': 'oo', 'letters': '\uA74F' }, { 'base': 'p', 'letters': '\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755' }, { 'base': 'q', 'letters': '\u0071\u24E0\uFF51\u024B\uA757\uA759' }, { 'base': 'r', 'letters': '\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783' }, { 'base': 's', 'letters': '\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B' }, { 'base': 't', 'letters': '\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787' }, { 'base': 'tz', 'letters': '\uA729' }, { 'base': 'u', 'letters': '\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289' }, { 'base': 'v', 'letters': '\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C' }, { 'base': 'vy', 'letters': '\uA761' }, { 'base': 'w', 'letters': '\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73' }, { 'base': 'x', 'letters': '\u0078\u24E7\uFF58\u1E8B\u1E8D' }, { 'base': 'y', 'letters': '\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF' }, { 'base': 'z', 'letters': '\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763' }];

	var diacriticsMap = {};
	for (var i = 0; i < defaultDiacriticsRemovalMap.length; i++) {
	    var letters = defaultDiacriticsRemovalMap[i].letters;
	    for (var j = 0; j < letters.length; j++) {
	        diacriticsMap[letters[j]] = defaultDiacriticsRemovalMap[i].base;
	    }
	}

	// "what?" version ... http://jsperf.com/diacritics/12
	function removeDiacritics(str) {
	    return str.replace(/[^\u0000-\u007E]/g, function (a) {
	        return diacriticsMap[a] || a;
	    });
	};

	function cleanArray(actual) {
	    var newArray = new Array();
	    for (var i = 0; i < actual.length; i++) {
	        if (actual[i]) {
	            newArray.push(actual[i]);
	        }
	    }
	    return newArray;
	};

	function arrayContainsAnotherArray(needle, haystack) {
	    for (var i = 0; i < needle.length; i++) {
	        var needleItem = needle[i];
	        var found = false;
	        for (var j = 0; j < haystack.length; j++) {
	            var haystackItem = haystack[j];
	            if (haystackItem.indexOf(needleItem) > -1) {
	                found = true;
	                break;
	            }
	        }
	        if (!found) return false;
	    }
	    return true;
	};

	module.exports = {
	    tokenize: function (str) {
	        var cleanStr = removeDiacritics(str.toLowerCase());
	        return cleanArray(cleanStr.split(" "));
	    },

	    isContainedIn: function (needle, haystack) {
	        var needleTokens = this.tokenize(needle);
	        var haystackTokens = this.tokenize(haystack);
	        return arrayContainsAnotherArray(needleTokens, haystackTokens);
	    }
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(7)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] scripts\\components\\menu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(8)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./menu.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    name: 'vnav',
	    props: {
	        menu: Array
	    },
	    methods: {
	        toggle: function toggle(menuItem) {
	            menuItem.collapsed = !menuItem.collapsed;
	        }
	    }
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "\n<div class='vnav-children-wrapper'>\n    <div v-for=\"menuItem in menu\" class='vnav-item-wrapper'>\n        <div class='vnav-item' data-val-displayNameFull='{{menuItem.displayNameFull}}'>\n            <i v-show=\"menuItem.icon\" class=\"vnav-icon fa fa-{{menuItem.icon}}\"></i>\n            <span class=\"vnav-item-text with-icon\">\n                    <a v-bind:href=\"menuItem.url\" class=\"vnav-link\" >{{ menuItem.displayName }}</a>\n                </span>\n            <span v-if=\"menuItem.menu && menuItem.menu.length\" class=\"plus-wrapper\" v-on:click=\"toggle(menuItem)\">\n                    <i class=\"vnav-icon fa\" v-bind:class=\"menuItem.collapsed ? 'fa-plus' : 'fa-minus'\" ></i>\n                </span>\n        </div>\n        <vnav v-if=\"!menuItem.collapsed\" :menu=\"menuItem.menu\" ></vnav>\n    </div>\n</div>\n";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(10)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] scripts\\components\\sidebar.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(11)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./sidebar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _menu = __webpack_require__(3);

	var _menu2 = _interopRequireDefault(_menu);

	var _clone = __webpack_require__(4);

	var _clone2 = _interopRequireDefault(_clone);

	var _menu3 = __webpack_require__(6);

	var _menu4 = _interopRequireDefault(_menu3);

	var _searchUtils = __webpack_require__(5);

	var _searchUtils2 = _interopRequireDefault(_searchUtils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var menu = (0, _menu2.default)();

	exports.default = {
	    name: 'sidebar',
	    components: {
	        'vnav': _menu4.default
	    },
	    data: function data() {
	        var menuItems = (0, _clone2.default)(menu);
	        this.updateCollapsedState(menuItems, true);

	        return {
	            searchTerm: '',
	            menu: menuItems
	        };
	    },
	    methods: {
	        updateCollapsedState: function updateCollapsedState(menuItem, collapsedState) {
	            if (!menuItem) return;

	            if (Array.isArray(menuItem)) {
	                for (var i = 0; i < menuItem.length; i++) {
	                    this.updateCollapsedState(menuItem[i], collapsedState);
	                }
	            } else {
	                menuItem.collapsed = collapsedState;
	                this.updateCollapsedState(menuItem.menu, collapsedState);
	            }
	        },
	        filterMenuItems: function filterMenuItems(menuItems, term) {
	            var result = [];
	            for (var i = 0; i < menuItems.length; i++) {
	                var filteredMenuItem = this.filterMenuItem(menuItems[i], term);
	                if (filteredMenuItem) result.push(filteredMenuItem);
	            }
	            return result;
	        },
	        filterMenuItem: function filterMenuItem(menuItem, term) {
	            if (_searchUtils2.default.isContainedIn(term, menuItem.displayNameFull)) return menuItem;else if (menuItem.menu) {
	                var filteredChildren = this.filterMenuItems(menuItem.menu, term);
	                if (filteredChildren.length) {
	                    menuItem.menu = filteredChildren;
	                    return menuItem;
	                }
	            }
	            return null;
	        },
	        search: function search() {
	            var menuItems = (0, _clone2.default)(menu);
	            this.updateCollapsedState(menuItems, !this.searchTerm);

	            this.menu = this.filterMenuItems(menuItems, this.searchTerm);
	        }
	    }
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "\n<div class='side-bar side-bar-left'>\n    <div id='vnav-container'>\n        <div>\n            <div class='search-wrapper'>\n                <input type=\"text\" v-model=\"searchTerm\" v-on:keyup=\"search\" class=\"vnav-input\" placeholder=\"Pesquisa no menu\"/>\n            </div>\n            <vnav :menu=\"menu\"></vnav>\n        </div>\n    </div>\n</div>\n";

/***/ }
/******/ ]);