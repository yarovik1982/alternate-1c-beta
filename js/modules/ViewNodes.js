export const ListNodes = {
   'top': `<div class="custom-position bg-warning py-0 border-top border-white">
               <div class="container-fluid">
                  <ul class="d-flex justify-content-around">
                     <li class="nav-item">
                        <a href="#" class="nav-link">Главная</a>
                     </li>
                     <li class="nav-item">
                        <a href="#" class="nav-link">Главная</a>
                     </li>
                     <li class="nav-item">
                        <a href="#" class="nav-link">Главная</a>
                     </li>
                     <li class="nav-item">
                        <a href="#" class="nav-link">Главная</a>
                     </li>
                     <li class="nav-item">
                        <ul class="navbar-nav">
                           <li class="nav-item dropdown">
                              <button class="btn btn-warning btn-sm dropdown-toggle" data-bs-toggle="dropdown"
                                 aria-expanded="false">
                                 <strong>Профайл</strong>
                              </button>
                              <ul class="profile-dropdown-menu dropdown-menu dropdown-menu-dark">
                                 <li class="profile-dropdown-item dropdown-item">Профиль</li>
                                 <li><hr class="dropdown-divider bg-light"></li>
                                 <li class="profile-dropdown-item dropdown-item">Выйти</li>
                              </ul>
                           </li>
                        </ul>
                     </li>
                  </ul>
               </div>
            </div> `,

   'bottom': `<div class="custom-position bg-warning border-top border-white fixed-bottom">
                  <div class="container-fluid">
                     <ul class="d-flex justify-content-around p-0 m-0">
                        <li class="nav-item">
                           <a href="#" class="nav-link">Главная</a>
                        </li>
                        <li class="nav-item">
                           <a href="#" class="nav-link">Главная</a>
                        </li>
                        <li class="nav-item">
                           <a href="#" class="nav-link">Главная</a>
                        </li>
                        <li class="nav-item">
                           <a href="#" class="nav-link">Главная</a>
                        </li>
                        <li class="nav-item">
                           <ul class="navbar-nav">
                              <li class="nav-item dropdown">
                                 <button class="btn btn-warning btn-sm dropdown-toggle" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <strong>Профайл</strong>
                                 </button>
                                 <ul class="profile-dropdown-menu dropdown-menu dropdown-menu-dark">
                                    <li class="profile-dropdown-item dropdown-item">Профиль</li>
                                    <li><hr class="dropdown-divider bg-light"></li>
                                    <li class="profile-dropdown-item dropdown-item">Выйти</li>
                                 </ul>
                              </li>
                           </ul>
                        </li>
                     </ul>
                  </div>
               </div> `,

   'left': `<div class=" d-flex">
               <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style="width: 280px;border-right: 1px solid blue;">
                  <div class="custom-position">
                  <ul class="nav nav-pills flex-column mb-auto">
                  <li class="nav-item">
                    <a href="#" class="nav-link active" aria-current="page">
                      Главная
                    </a>
                  </li>
                  <li>
                    <a href="#" class="nav-link link-body-emphasis">
                      Главная
                    </a>
                  </li>
                  <li>
                    <a href="#" class="nav-link link-body-emphasis">
                      Главная
                    </a>
                  </li>
                  <li>
                    <a href="#" class="nav-link link-body-emphasis">
                      Главная
                    </a>
                  </li>
                  <li>
                    <a href="#" class="nav-link link-body-emphasis">
                      Главная
                    </a>
                  </li>
                </ul>
                <hr>
                <div class="dropdown">
                  <a href="#" class="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <strong>Профайл</strong>
                  </a>
                  <ul class="profile-dropdown-menu dropdown-menu text-small shadow dropdown-menu-dark">
                    <li><a class="dropdown-item" href="#">Профиль</a></li>
                    <li><hr class="dropdown-divider bg-light"></li>
                    <li><a class="dropdown-item" href="#">Выход</a></li>
                  </ul>
                </div>
                  </div>
               </div>
               <div class="p-3 bg-warning bg-opacity-25" style="width: calc(100vw - 280px);"></div>
            </div>`,

   'right': `<div class="custom-position d-flex flex-row-reverse">
               <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style="width: 280px;border-left: 1px solid blue;">
                  <ul class="nav nav-pills flex-column mb-auto">
                    <li class="nav-item">
                      <a href="#" class="nav-link active d-flex justify-content-end" aria-current="page">
                        Главная
                      </a>
                    </li>
                    <li>
                      <a href="#" class="nav-link link-body-emphasis d-flex justify-content-end">
                        Главная
                      </a>
                    </li>
                    <li>
                      <a href="#" class="nav-link link-body-emphasis d-flex justify-content-end">
                        Главная
                      </a>
                    </li>
                    <li>
                      <a href="#" class="nav-link link-body-emphasis d-flex justify-content-end">
                        Главная
                      </a>
                    </li>
                    <li>
                      <a href="#" class="nav-link link-body-emphasis d-flex justify-content-end">
                        Главная
                      </a>
                    </li>
                  </ul>
                  <hr>
                  <div class="dropdown">
                    <a href="#" class="d-flex justify-content-end align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      <strong>Профайл</strong>
                    </a>
                    <ul class="profile-dropdown-menu dropdown-menu text-small shadow dropdown-menu-dark">
                      <li><a class="dropdown-item" href="#">Профиль</a></li>
                      <li><hr class="dropdown-divider bg-light"></li>
                      <li><a class="dropdown-item" href="#">Выход</a></li>
                    </ul>
                  </div>
               </div>
               <div class="p-3 bg-warning bg-opacity-25" style="width: calc(100vw - 280px);"></div>
            </div>`,
}