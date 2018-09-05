'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">Angular Formly</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                            <a href="changelog.html"
                        data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>CHANGELOG
                        </a>
                    </li>
                    <li class="link">
                            <a href="contributing.html"
                        data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>CONTRIBUTING
                        </a>
                    </li>
                    <li class="link">
                            <a href="license.html"
                        data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>LICENSE
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/FormlyModule.html" data-type="entity-link">FormlyModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-FormlyModule-0f3a8b298905fd32bbfbdf0f9359c47b"' : 'data-target="#xs-components-links-module-FormlyModule-0f3a8b298905fd32bbfbdf0f9359c47b"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-FormlyModule-0f3a8b298905fd32bbfbdf0f9359c47b"' : 'id="xs-components-links-module-FormlyModule-0f3a8b298905fd32bbfbdf0f9359c47b"' }>
                                        <li class="link">
                                            <a href="components/FormlyField.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormlyField</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FormlyForm.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormlyForm</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FormlyGroup.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormlyGroup</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FormlyTemplateType.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormlyTemplateType</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FormlyValidationMessage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormlyValidationMessage</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-FormlyModule-0f3a8b298905fd32bbfbdf0f9359c47b"' : 'data-target="#xs-directives-links-module-FormlyModule-0f3a8b298905fd32bbfbdf0f9359c47b"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-FormlyModule-0f3a8b298905fd32bbfbdf0f9359c47b"' : 'id="xs-directives-links-module-FormlyModule-0f3a8b298905fd32bbfbdf0f9359c47b"' }>
                                        <li class="link">
                                            <a href="directives/FormlyAttributes.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormlyAttributes</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/FormlySelectModule.html" data-type="entity-link">FormlySelectModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-FormlySelectModule-77dc6250ad53f3296577b2ede93d5dff"' : 'data-target="#xs-pipes-links-module-FormlySelectModule-77dc6250ad53f3296577b2ede93d5dff"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-FormlySelectModule-77dc6250ad53f3296577b2ede93d5dff"' : 'id="xs-pipes-links-module-FormlySelectModule-77dc6250ad53f3296577b2ede93d5dff"' }>
                                        <li class="link">
                                            <a href="pipes/FormlySelectOptionsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormlySelectOptionsPipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                    <li class="link">
                        <a href="classes/CoreExtension.html" data-type="entity-link">CoreExtension</a>
                    </li>
                    <li class="link">
                        <a href="classes/Field.html" data-type="entity-link">Field</a>
                    </li>
                    <li class="link">
                        <a href="classes/FieldArrayType.html" data-type="entity-link">FieldArrayType</a>
                    </li>
                    <li class="link">
                        <a href="classes/FieldExpressionExtension.html" data-type="entity-link">FieldExpressionExtension</a>
                    </li>
                    <li class="link">
                        <a href="classes/FieldFormExtension.html" data-type="entity-link">FieldFormExtension</a>
                    </li>
                    <li class="link">
                        <a href="classes/FieldType.html" data-type="entity-link">FieldType</a>
                    </li>
                    <li class="link">
                        <a href="classes/FieldValidationExtension.html" data-type="entity-link">FieldValidationExtension</a>
                    </li>
                    <li class="link">
                        <a href="classes/FieldWrapper.html" data-type="entity-link">FieldWrapper</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/FormlyConfig.html" data-type="entity-link">FormlyConfig</a>
                            </li>
                            <li class="link">
                                <a href="injectables/FormlyFormBuilder.html" data-type="entity-link">FormlyFormBuilder</a>
                            </li>
                            <li class="link">
                                <a href="injectables/FormlyJsonschema.html" data-type="entity-link">FormlyJsonschema</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${ isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                    <li class="link">
                        <a href="interfaces/ConfigOption.html" data-type="entity-link">ConfigOption</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ExpressionPropertyCache.html" data-type="entity-link">ExpressionPropertyCache</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ExtensionOption.html" data-type="entity-link">ExtensionOption</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/FieldValidatorFn.html" data-type="entity-link">FieldValidatorFn</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/FormlyExtension.html" data-type="entity-link">FormlyExtension</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/FormlyFieldConfig.html" data-type="entity-link">FormlyFieldConfig</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/FormlyFieldConfigCache.html" data-type="entity-link">FormlyFieldConfigCache</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/FormlyFormOptions.html" data-type="entity-link">FormlyFormOptions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/FormlyFormOptionsCache.html" data-type="entity-link">FormlyFormOptionsCache</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/FormlyLifeCycleFn.html" data-type="entity-link">FormlyLifeCycleFn</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/FormlyLifeCycleOptions.html" data-type="entity-link">FormlyLifeCycleOptions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/FormlyTemplateOptions.html" data-type="entity-link">FormlyTemplateOptions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/FormlyValueChangeEvent.html" data-type="entity-link">FormlyValueChangeEvent</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ManipulatorOption.html" data-type="entity-link">ManipulatorOption</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ManipulatorWrapper.html" data-type="entity-link">ManipulatorWrapper</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TemplateManipulators.html" data-type="entity-link">TemplateManipulators</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TypeOption.html" data-type="entity-link">TypeOption</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ValidationMessageOption.html" data-type="entity-link">ValidationMessageOption</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ValidatorOption.html" data-type="entity-link">ValidatorOption</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/WrapperOption.html" data-type="entity-link">WrapperOption</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
