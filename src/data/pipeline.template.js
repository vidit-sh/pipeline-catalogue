@Library('conduit')_

pipeline {
  agent any
  options {
    {{#options}}
    {{.}}
    {{/options}}
  }
  stages {
    {{#stages}}
    {{#if methods}}
    stage('{{ name }}') {
      steps {
        {{#unless noUnstash}}
        unstash 'src'
        {{/unless}}
        {{#methods}}
        {{#with (lookup ../../methods .) as |method|}}
        {{#unless isCore}}{{method.src}}.{{/unless}}{{method.name}} {{method.defaultArgs}}
        {{/with}}
        {{/methods}}
      }
    }
    {{/if}}
    {{/stages}}
  }
  {{#if post}}
  post {
    always {
      script {
      {{#post}}
          {{.}}
      {{/post}}
      }
    }
  }
  {{/if}}
}
