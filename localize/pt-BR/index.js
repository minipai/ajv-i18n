'use strict';
module.exports = function localize_pt_BR(errors) {
  if (!(errors && errors.length)) return;
  for (var i = 0; i < errors.length; i++) {
    var e = errors[i];
    var out;
    switch (e.keyword) {
      case '$ref':
        out = 'Não é possível resolver a referência ' + (e.params.ref);
        break;
      case 'additionalItems':
        out = 'Não são permitidos itens adicionais';
        break;
      case 'additionalProperties':
        out = 'Não são permitidas propriedades adicionais';
        break;
      case 'anyOf':
        out = 'Os dados não correspondem a nenhum esquema de "anyOf"';
        break;
      case 'const':
        out = 'should be equal to constant';
        break;
      case 'contains':
        out = 'deve conter um item válido';
        break;
      case 'custom':
        out = 'deve passar a validação de palavras-chave "' + (e.keyword) + '"';
        break;
      case 'dependencies':
        out = '';
        var n = e.params.depsCount;
        out += ' deve ter propriedade';
        if (n != 1) {
          out += 's';
        }
        out += ' ' + (e.params.deps) + ' quando a propriedade ' + (e.params.property) + ' estiver presente';
        break;
      case 'enum':
        out = 'Deve ser igual a um dos valores predefinidos';
        break;
      case 'exclusiveMaximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'deve ser ' + (cond);
        break;
      case 'exclusiveMinimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'deve ser ' + (cond);
        break;
      case 'false schema':
        out = 'boolean schema is false';
        break;
      case 'format':
        out = 'A validação do formato falhou "' + (e.params.format) + '"';
        break;
      case 'formatExclusiveMaximum':
        out = 'formatExclusiveMaximum deve ser um booleano';
        break;
      case 'formatExclusiveMinimum':
        out = 'formatExclusiveMaximum deve ser um booleano';
        break;
      case 'formatMaximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'deve ser ' + (cond);
        break;
      case 'formatMinimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'deve ser ' + (cond);
        break;
      case 'if':
        out = 'should match "' + (e.params.failingKeyword) + '" schema';
        break;
      case 'maximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'deve ser ' + (cond);
        break;
      case 'maxItems':
        out = '';
        var n = e.params.limit;
        out += 'não deve ter mais que ' + (n) + ' elemento';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'maxLength':
        out = '';
        var n = e.params.limit;
        out += 'não deve ter mais que ' + (n) + ' caracter';
        if (n != 1) {
          out += 'es';
        }
        break;
      case 'maxProperties':
        out = '';
        var n = e.params.limit;
        out += 'não deve ter mais que ' + (n) + ' propriedade';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'minimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'deve ser ' + (cond);
        break;
      case 'minItems':
        out = '';
        var n = e.params.limit;
        out += 'não deve ter menos que ' + (n) + ' elemento';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'minLength':
        out = '';
        var n = e.params.limit;
        out += 'não deve ter menos que ' + (n) + ' caracter';
        if (n != 1) {
          out += 'es';
        }
        break;
      case 'minProperties':
        out = '';
        var n = e.params.limit;
        out += 'não deve ter menos que ' + (n) + ' propriedade';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'multipleOf':
        out = 'deve ser múltiplo de ' + (e.params.multipleOf);
        break;
      case 'not':
        out = 'não deve ser valido segundo o esquema em "not"';
        break;
      case 'oneOf':
        out = 'deve corresponder exatamente com um esquema em "oneOf"';
        break;
      case 'pattern':
        out = 'deve corresponder ao padrão "' + (e.params.pattern) + '"';
        break;
      case 'patternRequired':
        out = 'deve ter a propriedade de padrão de correspondência "' + (e.params.missingPattern) + '"';
        break;
      case 'propertyNames':
        out = 'property name \'' + (e.params.propertyName) + '\' is invalid';
        break;
      case 'required':
        out = 'deve ter a propriedade requerida ' + (e.params.missingProperty);
        break;
      case 'switch':
        out = 'deve passar a validação "switch" de palavra-chave, o caso ' + (e.params.caseIndex) + ' falha';
        break;
      case 'type':
        out = 'deve ser ' + (e.params.type);
        break;
      case 'uniqueItems':
        out = 'não deve ter itens duplicados (os itens ## ' + (e.params.j) + ' e ' + (e.params.i) + ' são idênticos)';
        break;
      default:
        continue;
    }
    e.message = out;
  }
};
