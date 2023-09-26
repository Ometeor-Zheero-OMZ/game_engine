package handlers

import (
	"net/http"

	"github.com/Ometeor-Zheero-OMZ/game_engine/pkg/config"
	"github.com/Ometeor-Zheero-OMZ/game_engine/pkg/models"
	"github.com/Ometeor-Zheero-OMZ/game_engine/pkg/render"
)

// Repo the repository used by the handlers
var Repo *Repository

// Repository is the repository type
type Repository struct {
	App *config.AppConfig
}

// NewRepo creates a new repository
func NewRepo(a *config.AppConfig) *Repository {
	return &Repository{
		App: a,
	}
}

// NewHandlers sets the repository for the handlers
func NewHandlers(r *Repository) {
	Repo = r
}

// Home is the handler for the home page
func (m *Repository) Home(w http.ResponseWriter, r *http.Request) {
	remoteIP := r.RemoteAddr
	m.App.Session.Put(r.Context(), "remote_ip", remoteIP)

	render.RenderTemplate(w, "home.page.tmpl", &models.TemplateData{})
}

// About is the handler for the about page
func (m *Repository) Features(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, "features.page.tmpl", &models.TemplateData{})
}
